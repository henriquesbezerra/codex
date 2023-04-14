const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const noteProtoPath = path.resolve(__dirname, '../proto/api.proto')
const protoObject = protoLoader.loadSync(noteProtoPath)
const ApiDefinition = grpc.loadPackageDefinition(protoObject)

const notes = [
  { id: 1, title: 'Note 1', description: 'Content 1' },
  { id: 2, title: 'Note 2', description: 'Content 2' }
]

function Get( { request } , callback){
  return callback(null, { data: notes })
}

const server = new grpc.Server()
server.addService(ApiDefinition.Api.service, { Get })

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
console.log('Listening')