import styled from '@emotion/styled';
import { Body } from '@/components/Body';
import Header from '@/components/Header/Header';
import { Input } from '@/components/Input';
import { useFingerprint } from '@/core/hooks';

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--background-color-secondary);

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
    overflow: hidden;
  }
`;

export default function Home() {
  useFingerprint();
  return (
    <Layout>
      <Header />
      <Body />
      <Input />
    </Layout>
  );
}
