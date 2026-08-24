
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { ContentfulSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('EntryEntity', async () => {

  test('instance', async () => {
    const testsdk = ContentfulSDK.test()
    const ent = testsdk.Entry()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const entry_ref01_ent = client.Entry()
    let entry_ref01_data = setup.data.new.entry['entry_ref01']
    entry_ref01_data['environment_id'] = setup.idmap['environment01']
    entry_ref01_data['space_id'] = setup.idmap['space01']

    entry_ref01_data = (await entry_ref01_ent.create(entry_ref01_data)).data()
    assert(null != entry_ref01_data.id)


    // LIST
    const entry_ref01_match = {}
    entry_ref01_match['environment_id'] = setup.idmap['environment01']
    entry_ref01_match['space_id'] = setup.idmap['space01']

    const entry_ref01_list = (await entry_ref01_ent.list(entry_ref01_match)).map((e) => e.data())

    assert(!isempty(select(entry_ref01_list, { id: entry_ref01_data.id })))


    // UPDATE
    const entry_ref01_data_up0 = {}
    entry_ref01_data_up0.id = entry_ref01_data.id
    entry_ref01_data_up0 ['environment_id'] = setup.idmap['environment_id']
    entry_ref01_data_up0 ['space_id'] = setup.idmap['space_id']

    const entry_ref01_markdef_up0 = { name: 'contentType', value: 'Mark01-entry_ref01_' + setup.now }
    entry_ref01_data_up0 [entry_ref01_markdef_up0.name] = entry_ref01_markdef_up0.value

    const entry_ref01_resdata_up0 = (await entry_ref01_ent.update(entry_ref01_data_up0)).data()
    assert(entry_ref01_resdata_up0.id === entry_ref01_data_up0.id)

    assert(entry_ref01_resdata_up0[entry_ref01_markdef_up0.name] === entry_ref01_markdef_up0.value)


    // LOAD
    const entry_ref01_match_dt0 = {}
    entry_ref01_match_dt0.id = entry_ref01_data.id
    const entry_ref01_data_dt0 = (await entry_ref01_ent.load(entry_ref01_match_dt0)).data()
    assert(entry_ref01_data_dt0.id === entry_ref01_data.id)


    // REMOVE
    const entry_ref01_match_rm0 = {}
    entry_ref01_match_rm0.id = entry_ref01_data.id
    await entry_ref01_ent.remove(entry_ref01_match_rm0)
  

    // LIST
    const entry_ref01_match_rt0 = {}
    entry_ref01_match_rt0['environment_id'] = setup.idmap['environment01']
    entry_ref01_match_rt0['space_id'] = setup.idmap['space01']

    const entry_ref01_list_rt0 = (await entry_ref01_ent.list(entry_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(entry_ref01_list_rt0, { id: entry_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/entry/EntryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ContentfulSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['entry01','entry02','entry03','space01','space02','space03','environment01','environment02','environment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CONTENTFUL_TEST_ENTRY_ENTID': idmap,
    'CONTENTFUL_TEST_LIVE': 'FALSE',
    'CONTENTFUL_TEST_EXPLAIN': 'FALSE',
    'CONTENTFUL_APIKEY': 'NONE',
  })

  idmap = env['CONTENTFUL_TEST_ENTRY_ENTID']

  if ('TRUE' === env.CONTENTFUL_TEST_LIVE) {
    client = new ContentfulSDK(merge([
      {
        apikey: env.CONTENTFUL_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CONTENTFUL_TEST_EXPLAIN,
    now: Date.now(),
  }

  return setup
}
  
