import Image from 'next/image'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header({ directory }) {
    return (
    <div className={styles.header}>
        <div className={styles.img_wrapper}>
            <img
                src={`images/midwestern.png`}
                alt='Midwestern Interactive Logo'
            />
        </div>
        <div>
            <Link
                href={directory === 'home' ? '/' : '/contact'}    
            >
              <span className={styles.directory}>
                {directory}
              </span>
            </Link>
        </div>
    </div>
    )
  }