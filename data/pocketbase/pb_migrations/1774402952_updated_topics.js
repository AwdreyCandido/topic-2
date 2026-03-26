/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2800040823")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2618431013",
    "hidden": false,
    "id": "relation1654793909",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "flashcards",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2800040823")

  // remove field
  collection.fields.removeById("relation1654793909")

  return app.save(collection)
})
