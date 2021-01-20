import React from 'react'
import logoImg from '../../assets/321611110734_.pic_hd.jpg'
import styles from './index.less'

class Logo extends React.Component{
    render(){
        return (
            <div className={styles.logo_container}>
                <img className={styles.logo_img} src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Logo