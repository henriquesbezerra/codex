const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const noteProtoPath = path.resolve(__dirname, '../proto/notes.proto')
const protoObject = protoLoader.loadSync(noteProtoPath)
const NotesDefinition = grpc.loadPackageDefinition(protoObject)

const client = new NotesDefinition.NoteService('localhost:50051', grpc.credentials.createInsecure())


// Método 1: Callback async
// function callAsync (client, method, parameters) {
//     return new Promise((resolve, reject) => {
//       client[method](parameters, (err, response) => {
//         if (err) reject(err)
//         resolve(response)
//       })
//     })
// }

// callAsync(client, 'list', {}).then(console.log).catch(console.error)

// Método 2: Tornar todos os métodos funccoes assync

function promisify (client) {
    for (let method in client) {
      client[`${method}Async`] = (parameters) => {
        return new Promise((resolve, reject) => {
          client[method](parameters, (err, response) => {
            if (err) reject(err)
            resolve(response)
          })
        })
      }
    }
}

promisify(client)

client.listAsync({}).then(console.log)

// client.list({}, (err, notes) => {
//     if(err) throw err
//     console.log(notes)
// })

// client.find({ id: 2 }, (err, { note }) => {
//     if(err) return console.error(err.details)
//     if(!note) return console.error('Not Found')
//     return console.log(note)
// })