import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

function CustomDrawer({...props}) {
    return (
        
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>

        </DrawerContentScrollView>
    )
}

export default CustomDrawer
