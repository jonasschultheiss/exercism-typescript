class SimpleCipher {
  public key: string;

  constructor(key: string) {
    if (key !== key.toLowerCase() || key === '' || typeof key === 'number') {
      console.log('here');
      throw new Error('Bad key');
    } 
  }

    encode( /* Parameters go here */ ) {
        // Your code here
    }

    decode( /* Parameters go here */ ) {
        // Your code here
    }
}

export default SimpleCipher
