import { sum, subtract } from './demo.js'

test('sum:', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract:', () => {
  expect(subtract(2, 1)).toBe(1)
})
