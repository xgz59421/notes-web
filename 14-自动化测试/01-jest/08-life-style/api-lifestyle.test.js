test('a', () => { console.log('a') })

beforeAll(()=>console.log('beforeAll'))
beforeEach(()=>console.log('beforeEach'))
afterAll(()=>console.log('afterAll'))
afterEach(()=>console.log('afterEach'))

// beforeAll
// beforeEach
// a
// afterAll
// afterEach