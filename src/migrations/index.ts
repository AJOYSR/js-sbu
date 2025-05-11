import { up as up_20241125_222020_initial } from './20241125_222020_initial'
import { down as down_20241125_222020_initial } from './20241125_222020_initial'
import { up as up_20241214_124128 } from './20241214_124128'
import { down as down_20241214_124128 } from './20241214_124128'
import { up as up_20241214_blob_storage } from './20241214_blob_storage'
import { down as down_20241214_blob_storage } from './20241214_blob_storage'

export const migrations = [
  {
    name: '20241125_222020_initial',
    up: up_20241125_222020_initial,
    down: down_20241125_222020_initial,
  },
  {
    name: '20241214_124128',
    up: up_20241214_124128,
    down: down_20241214_124128,
  },
  {
    name: '20241214_blob_storage',
    up: up_20241214_blob_storage,
    down: down_20241214_blob_storage,
  },
]
