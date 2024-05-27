import Login from './Login'
import Register from './Register'
import { useState } from "react";
import { 
  Flex, Box, Center, FormControl, Input, FormLabel, HStack, Button,
 } from '@chakra-ui/react'

function App() {

  return(
  <div className="app-container">
      <Register />
  </div>
   )
}

export default App

