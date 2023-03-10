import FAQ from '@/components/home/faq'
import Footer from '@/components/home/footer'
import HeroSection from '@/components/home/hero-section'
import Steps from '@/components/home/steps'
import UseCases from '@/components/home/usecases'
import Header from '@/components/home/header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Scrnly - Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className="h-[90vh] px-[5%] md:px-[17.5%] py-10 flex justify-center items-start">
          <HeroSection />
        </section>
        <section className="px-[10%] md:px-[17.5%] py-10">
          <Steps />
        </section>
        <section className="px-[12%] flex flex-col gap-4 py-10">
          <h6 className="text-lg font-bold text-center">Use Cases</h6>
          <UseCases />
        </section>
        <section className="px-[12%] flex flex-col gap-4 py-10">
          <h6 className="text-lg font-bold">Frequently asked questions</h6>
          <FAQ />
        </section>
      </main>
      <Footer/>
    </>
  )
}
