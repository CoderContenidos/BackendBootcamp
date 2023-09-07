import supertest from "supertest";
import { expect } from "chai";

const requester  = supertest('http://localhost:8080');


describe("Prueba de usuarios",() =>{
    describe("Prueba de POSTs",()=>{
        test('Si no hay usuarios, el primer usuario debe devolver un id = 1',async()=>{
            const response = await requester.post('/api/users').send({
                firstName:'Mauricio',
                lastName:'Espinosa',
                email:"correotest@correo.com",
                password:"123"
            })
            const {body} = response;
            expect(body.user).to.have.property('id').and.to.be.equals(1)
        })
    })
    describe("Prueba de GETs",()=>{
        test('Los usuarios deben ser devueltos en un arreglo',async()=>{
            const response = await requester.get('/api/users')
            const {body} = response;
            expect(Array.isArray(body.users)).to.be.true;
        })
        test('Debe poder traer al usuario devuelto en la prueba POST',async ()=>{
            const response = await requester.get('/api/users/1');
            const {body} = response;
            console.log(body);
            expect(body.user).to.have.property("name").and.to.be.equal("Mauricio Espinosa")
        })
    })
}) 