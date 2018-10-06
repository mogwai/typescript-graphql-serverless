import test from 'ava';
import { app } from '../src/index';
import * as chai from 'chai';
const { request } = chai.use(require('chai-http'));

test('We recieve the correct message', async t => {
  let res = await request(app)
    .get('/')
    .send();
  t.is(res.body.message, 'HEY!');
  t.pass();
});
