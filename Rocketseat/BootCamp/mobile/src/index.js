import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function(){
    
    const [projects, setProjects] = useState([]);

    async function handleAddProject(){
        const response = await api.post('projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: '@henriquesbezerra'
        });

        setProjects([...projects, response.data]);
    }

    useEffect(()=>{
        api.get('/projects').then(res =>{
            console.log(res.data);
            setProjects(res.data);
        })
    },[]);

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#30336b" />
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects}
                keyExtractor={(project => project.id)}
                renderItem={({item})=>(
                    <Text style={styles.title}>{item.title}</Text>
                )}
            />

            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button}
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>

        </SafeAreaView>

        {/* <View style={styles.container}>
            {projects.map(project => <Text key={project.id} style={styles.title}>{project.title}</Text>)}
        </View> */}
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: "#30336b",        
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    button:{        
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText:{
        fontWeight: 'bold',
        fontSize: 16
    }
});