import { expect, beforeEach, it } from 'vitest';
import randomName from '../src/utils/random-name'

it('随机中文库', () => {
  let names = []
  while(names.length < 11)
    names.push(randomName.getMaleName())
  console.log("🚀 ~ file: randname.spec.ts ~ line 16 ~ it ~ names", names)
})