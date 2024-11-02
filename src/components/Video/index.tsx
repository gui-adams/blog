// src/components/Video/index.tsx

import styles from '@/components/Video/styles.module.scss';

export const Video = () => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.video}
        src="https://player.vimeo.com/video/1013621914?badge=0&autopause=0&player_id=0&app_id=58479"
        title="SIMPLEWAY.S"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  );
};
