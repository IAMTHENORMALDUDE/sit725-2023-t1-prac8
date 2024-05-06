import {expect} from 'chai';
// const expect = chai.expect;
// var request = require("request");

// const assert = require('assert');
// const fetch = require('node-fetch');

describe('Testing POST /api/users', () => {
    it('should create a new user', function(){
        const response =fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: 'Farid',
                lastName: 'Vazirnia',
                email: 'faridvazirnia@gmail.com',
                password: 'password123'
            })
        });

        expect(response.status, 200);
        // done();
    });
});
