const SimpleStorage = artifacts.require("SimpleStorage");
const testData = 123;

contract("SimpleStorage", accounts => {
  it("stores a number", async () => {
    const store = await SimpleStorage.deployed();
    const result = await store.set(testData, {
      from: accounts[0]
    })
    assert.equal(typeof result.tx, "string");
  })
  it("retrieves stored data", async () => {
    const store = await SimpleStorage.deployed();
    const result = await store.get()
    assert.equal(result.toNumber(), testData);
  })
  it("set value event works", async () => {
    const store = await SimpleStorage.deployed();
    const result = await store.set(testData);
    assert.equal(result.logs[0].args.value, testData);
  })
})