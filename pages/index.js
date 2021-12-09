import axios from 'axios';
import { useState } from 'react';

import Header from '../components/header'
import Card from '../components/card'

import styles from '../styles/index.module.css'

const arr1 = [
  'Matt Johnson', 
  'Bart Paden', 
  'Ryan Doss', 
  'Jared Malcolm'
];

const arr2 = [
  'Matt Johnson', 
  'Bart Paden', 
  'Jordan Heigle', 
  'Tyler Viles'
];

let filteredArr = []

export default function Home() {
  const getData = () => {
		axios.get('http://localhost:3000/').then((res) => {
			console.log(res.message);
		});
	};
	getData();
	const [counter, setCounter] = useState(0);
	const [list, setList] = useState([]);

	const generateList = () => {
		if (counter === 0) {
			setCounter(1);
			filteredArr = [...new Set([...arr1, ...arr2])];
			setList(filteredArr);

			return;
		}
		window.alert("List has already been filtered.");
	};

  return (
    <>
      <Header directory='contact'/>
        <div className={styles.card_container}>
          <Card image='walkie_talkie'/>
          <Card image='bunny'/>
          <Card image='fancy_button'/>
        </div>
        <section className={styles.content}>
          <h1 className={styles.heading}> One</h1>
          <p className={styles.paragraph}>
            Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when
            <span onClick={generateList} className={styles.link}> this link </span>
            is clicked. If the operation has been completed already, notify the user that this has already been done.
          </p>
          <ul className={styles.list_wrapper}>
            {list.map((e) => (
              <li
                key={e}
                className={styles.list_item}
              >
                {e}
              </li>
            ))}
          </ul>
			</section>
    </>
  )
}