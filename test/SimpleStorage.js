const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", accounts => {
  const testData = 123;
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
})