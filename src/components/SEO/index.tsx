import { NextSeo } from 'next-seo';

const DEFAULT_TITLE = '정재욱 | FE개발자 | 무엇이든 물어보세요!';
const DEFAULT_DESCRIPTION =
  '정재욱처럼 생각하고 말하는 가상비서입니다! 정재욱에 관해 무엇이든 물어보세요!';

const SEO = () => {
  return (
    <NextSeo
      robotsProps={{
        nosnippet: false,
        notranslate: false,
        noimageindex: false,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'standard',
        maxVideoPreview: -1,
      }}
      title={DEFAULT_TITLE}
      defaultTitle={DEFAULT_TITLE}
      description={DEFAULT_DESCRIPTION}
    />
  );
};

export default SEO;
