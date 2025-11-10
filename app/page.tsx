'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)

  useEffect(() => {
    const timings = [0, 2000, 5000, 12000]

    timings.forEach((timing, index) => {
      setTimeout(() => {
        setCurrentScene(index)
      }, timing)
    })
  }, [])

  return (
    <main className={styles.container}>
      {/* Scene 1: Ved Vyas in Meditation */}
      <div className={`${styles.scene} ${currentScene >= 0 ? styles.active : ''}`}>
        <div className={styles.sceneContent}>
          <div className={styles.cave}>
            <div className={styles.vedVyas}>
              <div className={styles.sage}>
                <div className={styles.head}></div>
                <div className={styles.body}></div>
                <div className={styles.beard}></div>
              </div>
            </div>
          </div>
          {currentScene >= 0 && (
            <div className={styles.voiceover}>
              <p className={styles.hindi}>महर्षि वेद व्यास ने कहा था…</p>
            </div>
          )}
        </div>
      </div>

      {/* Scene 2: Fire and Chaos */}
      {currentScene >= 1 && (
        <div className={`${styles.scene} ${styles.active}`}>
          <div className={styles.sceneContent}>
            <div className={styles.chaos}>
              <div className={styles.flames}>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
              </div>
              <div className={styles.fighting}>
                <div className={styles.figure}></div>
                <div className={styles.figure}></div>
                <div className={styles.figure}></div>
              </div>
            </div>
            <div className={styles.voiceover}>
              <p className={styles.hindi}>एक समय आएगा जब मनुष्य दानवों से भी अधिक पापी होंगे…</p>
            </div>
          </div>
        </div>
      )}

      {/* Scene 3: Demons vs Humans */}
      {currentScene >= 2 && (
        <div className={`${styles.scene} ${styles.active}`}>
          <div className={styles.sceneContent}>
            <div className={styles.comparison}>
              <div className={styles.demons}>
                <div className={styles.demon}>
                  <div className={styles.demonFace}></div>
                  <div className={styles.demonBody}></div>
                </div>
                <div className={styles.demon}>
                  <div className={styles.demonFace}></div>
                  <div className={styles.demonBody}></div>
                </div>
              </div>
              <div className={styles.vs}>VS</div>
              <div className={styles.humans}>
                <div className={styles.evilHuman}>
                  <div className={styles.humanFace}></div>
                  <div className={styles.humanBody}></div>
                  <div className={styles.darkness}></div>
                </div>
                <div className={styles.evilHuman}>
                  <div className={styles.humanFace}></div>
                  <div className={styles.humanBody}></div>
                  <div className={styles.darkness}></div>
                </div>
              </div>
            </div>
            <div className={styles.voiceover}>
              <p className={styles.hindi}>उनका लोभ, क्रोध और कपट, स्वयं राक्षसों को भी लजाएगा।</p>
            </div>
          </div>
        </div>
      )}

      {/* Replay Button */}
      {currentScene >= 2 && (
        <button
          className={styles.replayButton}
          onClick={() => {
            setCurrentScene(-1)
            setTimeout(() => setCurrentScene(0), 100)
            setTimeout(() => setCurrentScene(1), 2000)
            setTimeout(() => setCurrentScene(2), 5000)
          }}
        >
          ↻ फिर से देखें
        </button>
      )}
    </main>
  )
}
