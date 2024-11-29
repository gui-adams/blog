import styles from '@/components/Video/styles.module.scss';
import { getDataHome } from '@/utils/actions/get-data';

export const Video = async () => {
  // Busca os dados no lado do servidor
  const data = await getDataHome();
  const metadata = data?.object?.metadata;

  // URL do vídeo do Cosmic ou fallback padrão
  const videoUrl =
    metadata?.video_url ||
    'https://player.vimeo.com/video/1013621914?badge=0&autopause=0&player_id=0&app_id=58479';

  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.video}
        src={videoUrl}
        title="SIMPLEWAY.S"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  );
};
