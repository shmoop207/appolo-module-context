import {App, createApp} from 'appolo'
import * as request from 'supertest';
import {ContextModule} from '../'
import {Manager2} from "./src/manager2";

let should = require('chai').should();


describe("context module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: __dirname, environment: "production", port: 8182});

        await app.module(new ContextModule());

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it('should get context from manager', async () => {


        let res = await request(app.handle)
            .get('/test/context?userName=bla');


        res.body.userName.should.be.eq("bla");

    });

    it('should get context from manager parallel', async () => {


        let [res, res2] = await Promise.all([request(app.handle).get('/test/context?userName=bla'), request(app.handle).get('/test/context?userName=foo')]);


        res.body.userName.should.be.eq("bla");

        res2.body.userName.should.be.eq("foo");

    });

    it('should create manual context', async () => {
        let manager:Manager2 = app.injector.get<Manager2>(Manager2);

        let name  = await manager.getContextName();

        name.should.be.eq("Manager2")
    })


});

