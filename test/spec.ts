import {App, createApp} from '@appolo/core'
import * as request from 'supertest';
import {ContextModule} from '../'
import {Manager2} from "./src/manager2";
import {Handler} from "./src/handlers/handler";

let should = require('chai').should();


describe("context module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: __dirname, environment: "production", port: 8182});

        await app.module.use(ContextModule);

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it('should get context from manager', async () => {


        let res = await request(app.route.handle)
            .get('/test/context?userName=bla');


        res.body.userName.should.be.eq("bla");

    });

    it('should get context from manager parallel', async () => {


        let [res, res2] = await Promise.all([request(app.route.handle).get('/test/context?userName=bla'), request(app.route.handle).get('/test/context?userName=foo')]);


        res.body.userName.should.be.eq("bla");

        res2.body.userName.should.be.eq("foo");

    });

    it('should create manual context', async () => {
        let manager: Manager2 = app.injector.get<Manager2>(Manager2);

        let name = await manager.getContextName();

        name.should.be.eq("Manager2")
    })

    it('should call from handler', async () => {
        let handler = app.injector.get<Handler>(Handler);

        let name1 = await handler.handle("test1");
        let name2 = await handler.handle("test2");

        name1.should.be.eq("test1bbb")
        name2.should.be.eq("test2bbb")
    })


});

