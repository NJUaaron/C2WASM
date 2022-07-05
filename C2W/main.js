const fs = require('fs');

const wasmBuffer = fs.readFileSync('main.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
    // Exported function live under instance.exports
    const { visit } = wasmModule.instance.exports;
    const ret = visit(1);
    const memory = wasmModule.instance.exports.memory;


    var dataView = new DataView(memory.buffer);
    var first_number_in_mem = dataView.getUint32(1024, true);

    console.log(first_number_in_mem);
});