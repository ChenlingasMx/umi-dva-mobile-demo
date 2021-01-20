import React from 'react'
import logoImg from '../../assets/src=http___b-ssl.duitang.com_uploads_item_201606_29_20160629115130_tsfrS.jpeg&refer=http___b-ssl.duitang.jpeg'
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