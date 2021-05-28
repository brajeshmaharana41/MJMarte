import React from 'react'
import { View, Text } from 'react-native'
import BackButton from '../components/BackButton'

import { StatusBar } from 'react-native'
import Myprofileheader from '../components/Header/Myprofileheader'
const MyProfile = (navigation) => {
    return (
        <> 
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Myprofileheader />

        </>
    )
}

export default MyProfile
