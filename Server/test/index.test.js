//const app = require('../src/app');
const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test Rutas R&M-API', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Debería responder con status: 200', async() => { 
            await agent.get('/rickandmorty/character/1').expect(200);
         })

        it('Debería responder un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => { 
            const response =  (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('origin');
            expect(response).toHaveProperty('image');
        })

        it('Debería responder con status: 500 si ocurre un error', async() => { 
            await agent.get('/rickandmorty/character/1000').expect(500);
        })

        describe('GET /rickandmorty/login', () => { 
            it('Debería retornar la propiedad access: true con user y password válidos a la url descrita', async() => { 
                const response = await agent.get('/rickandmorty/login?email=edwar.castillo@gmail.com&password=1234567')
                expect(200)
                expect(response.body.access).toBe(true)
            })
            it('Debería retornar la propiedad access: false con user y password inválidos a la url descrita', async() => { 
                const response = await agent.get('/rickandmorty/login?email=edwarcastillo@gmail.com&password=1234567')
                expect(200)
                expect(response.body.access).toBe(false)
            })
         })

         describe('POST /rickandmorty/fav', () => { 
             const character1 = {id:1, name:'Rick Sanchez'}
             const character2 = {id:2, name:'Morty Smith'}
            it('Debería incluir el favorito enviado por body y ser devuelto en un arreglo', async() => { 
                const response = await agent.post('/rickandmorty/fav').send(character1);
                expect(response.body).toEqual([character1])
            })

            it('Debería incluir el favorito agregado previamente mas el enviado en esta ejecución y ser devuelta en el arreglo', async() => { 
                const response = await agent.post('/rickandmorty/fav').send(character2);
                expect(response.body).toEqual([character1, character2])
            })
         })
        
        describe('DELETE: /rickandmorty/fav/:id', () => { 
            const character1 = {id:1, name:'Rick Sanchez'}
            const character2 = {id:2, name:'Morty Smith'}
             it('el ID ingresado no debería hacer match con ningún personaje del arreglo characters', async () => { 
                const response = await agent.delete('/rickandmorty/fav/5');
                expect(response.body).toContainEqual(character1);
                expect(response.body).toContainEqual(character2);
              })
             it('Debería eliminar el personaje con el id ingresado', async () => { 
                const response = await agent.delete('/rickandmorty/fav/1');                
                expect(response.body).not.toEqual(character1);
                expect(response.body).toContainEqual(character2);
              })
         })
    });
});