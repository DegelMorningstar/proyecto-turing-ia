import {Layout} from '../components/Layout'
import Link from 'next/link'

const custom404 = () => {
  return (
    <>
        <Layout>
        <div>404 not found</div>
        <Link href="/">
            <a>Back to home</a>
        </Link>
        </Layout>
    </>
  )
}

export default custom404