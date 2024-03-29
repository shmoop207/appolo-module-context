"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appolo/core");
const request = require("supertest");
const __1 = require("../");
const manager2_1 = require("./src/manager2");
const handler_1 = require("./src/handlers/handler");
let should = require('chai').should();
describe("context module Spec", function () {
    let app;
    beforeEach(async () => {
        app = (0, core_1.createApp)({ root: __dirname, environment: "production", port: 8182 });
        await app.module.use(__1.ContextModule);
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
        let manager = app.injector.get(manager2_1.Manager2);
        let name = await manager.getContextName();
        name.should.be.eq("Manager2");
    });
    it('should call from handler', async () => {
        let handler = app.injector.get(handler_1.Handler);
        let name1 = await handler.handle("test1");
        let name2 = await handler.handle("test2");
        name1.should.be.eq("test1bbb");
        name2.should.be.eq("test2bbb");
    });
});
//# sourceMappingURL=spec.js.map