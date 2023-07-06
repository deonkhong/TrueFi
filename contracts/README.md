<h1> Rust & Substrate Installation</h1>

Follow this to install Rust on Linux
https://docs.substrate.io/install/linux/

Use version 1.69 and set it to default 
(Issue with 1.7.0 https://substrate.stackexchange.com/questions/7881/error-loading-of-original-wasm-failed)

<h2>Installing rust 1.69:</h2>

	rustup update stable
 
	rustup install 1.69
 
	rustup default 1.69
 
	rustup component add rust-src --toolchain 1.69
 
	rustup target add wasm32-unknown-unknown --toolchain 1.69
 
	cargo contract build
	
<h2>Install Substrate</h2>	
Then follow this doc https://docs.substrate.io/tutorials/smart-contracts/prepare-your-first-contract/

At this part "cargo install --force --locked cargo-contract --version 2.0.0-rc"

	use this instead:	 cargo install --force --locked cargo-contract

<h1>Testing & Building</h1>

Testing the smart contract:

 	cargo test
  
Building the smart contract:

	cargo build

Starting a local contract node:

	cargo contract instantiate --constructor new --args 1_000_000 --suri //Alice --salt $(date +%s)

To call a contract message, the $INSTANTIATED_CONTRACT_ADDRESS from calling local contract node needs to be used.
Calling a contract message:

	cargo contract call --contract $INSTANTIATED_CONTRACT_ADDRESS \
    --message total_supply --suri //Alice --dry-run
 
 
