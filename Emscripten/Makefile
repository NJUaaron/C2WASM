a.out.wasm a.out.js main.wat:
	emcc -O0 main.c
	wasm2wat a.out.wasm -o main.wat

clean:
	rm a.out.js a.out.wasm main.wat

run:
	node ./a.out.js