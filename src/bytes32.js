const ethers = require('ethers');
// import { useEffect, useState } from 'react';

async function createBytes(args) {
  const name = args[0];
  const bytes = ethers.utils.formatBytes32String(name);
  console.log('Bytes:', bytes);
}

createBytes(process.argv.slice(2));
