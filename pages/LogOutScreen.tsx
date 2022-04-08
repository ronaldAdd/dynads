import React from 'react'
import {Box, Text, Input, Button} from 'native-base'
import { getAuth,signOut } from "firebase/auth";
import { app } from '../firebase-config';

import useAuthentication from '../Api/useAuthentication'
const auth=getAuth(app);

function LogOutScreen() {
    const user=useAuthentication();

  return (
    <Box>
          <Button onPress={() => signOut(auth)}>
          Sign Out
          </Button>
    </Box>

  )
}

export default LogOutScreen