import React from 'react';
import Link from 'next/link'
import styles from './index.module.css';
import Card from './Card';
import { initStoreWrapper,initialCards } from '../store';

const index= ({cards})=>{
    return (
    <div className={styles.app}>
        <header className={styles.header}>
            <img src='/logo.png' className={styles.logo} alt='logo' />
        </header>
        <Link href='/pages2'>
        <a><h2>Page 2</h2></a>
        </Link>
        <div className={styles.grid}>
            {cards.map(card=>{
                return <Card key={card.id}  />
            })}
        </div>
    </div>)
}
//use the next-redux-wrapper here to wrap the getInitialProps, then you can pass the data to the props
index.getInitialProps=initStoreWrapper.getInitialPageProps(store=>()=>{
    return store.dispatch(initialCards())
})
export default initStoreWrapper.withRedux(index)