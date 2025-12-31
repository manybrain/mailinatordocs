import {Redirect} from '@docusaurus/router';

// Push visitors hitting the root directly into the docs intro page.
export default function Home() {
  return <Redirect to="/docs/intro" />;
}
