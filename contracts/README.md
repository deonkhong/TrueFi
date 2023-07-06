<h1> Rust & Substrate Installation</h1>

Follow this to install Rust on Linux
https://docs.substrate.io/install/linux/

Use version 1.69 and set it to default 
(Issue with 1.7.0 https://substrate.stackexchange.com/questions/7881/error-loading-of-original-wasm-failed)

## Installing rust 1.69 and cargo-contract CLI:

	rustup update stable
 
	rustup install 1.69
 
	rustup default 1.69
 
	rustup component add rust-src --toolchain 1.69
 
	rustup target add wasm32-unknown-unknown --toolchain 1.69

	cargo install --force --locked cargo-contract
 
	cargo contract build

### Verify:
	rustup show
	rustup +nightly show
	
<h2>Install Substrate</h2>	
Then follow this doc https://docs.substrate.io/tutorials/smart-contracts/prepare-your-first-contract/

At this part "cargo install --force --locked cargo-contract --version 2.0.0-rc"

	use this instead:	 cargo install --force --locked cargo-contract

<h1>Testing & Building</h1>

Testing the smart contract:

 	cargo test
  
Building the smart contract:

	cargo build



<h1>Deploying the smart contract on local node</h1>

Starting a local contract node:

	substrate-contracts-node --log info,runtime::contracts=debug 2>&1

Instantiate your contract

	cargo contract instantiate --constructor new --args 1_000_000 --suri //Alice --salt $(date +%s) -x

Example $INSTANTIATED_CONTRACT_ADDRESS:

![image](https://github.com/deonkhong/TrueFi/assets/72732410/5b255e89-e3d2-492e-b371-f88ed044869b)


<h2>Calling a contract message</h2>
To call a contract message, the $INSTANTIATED_CONTRACT_ADDRESS from calling local contract node needs to be used.	
 	
  	cargo contract call --contract $INSTANTIATED_CONTRACT_ADDRESS --message $FUNCTION_NAME --args(Optional) arg*(Optional) --suri $CALLER--dry-run -x
 
Example scenario:

Contract Address  	5Deu8cPQrGw3qtdMBvJjg7jvUeJU2Dm9opnr3oWuH7jCVpYc

Alice Address 		5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY

Bob Address		5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty

Example message

  	cargo contract call --contract 5Deu8cPQrGw3qtdMBvJjg7jvUeJU2Dm9opnr3oWuH7jCVpYc --message transfer --args 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty 200 --suri //Alice -x
