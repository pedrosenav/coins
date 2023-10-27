'use client'

import CoinCard from '@/components/CoinCard'
import CoinCardSkeleton from '@/components/CoinCardSkeleton'
import Container from '@/components/Container'
import { countries } from '@/lib/countries'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const url = 'https://restcountries.com/v3.1/all'

  const { data, isLoading } = useSWR<CountryInfo[]>(url, fetcher)

  const countryNames = countries.map((country) => country.countryName)

  const activeCountries = data
    ?.filter((country: CountryInfo) => {
      return countryNames.includes(country.name.common)
    })
    .map((country: CountryInfo) => {
      const currentCountryName = country.name.common
      const coinCount = countries.find(
        (country) => country.countryName === currentCountryName,
      )?.coinCount

      return {
        name: country?.translations.por?.common || '...',
        flag: country?.flags?.png || 'favicon.ico',
        coinCount: coinCount || 0,
        isLoading,
      }
    })

  const countriesCount = activeCountries?.length

  return (
    <main>
      <Container className="space-y-4 py-6">
        <header className="flex justify-between">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-lg text-zinc-400">Filters</h2>
            <div className="flex gap-2">
              <button className="min-w-[4rem] rounded-sm bg-white px-2 py-1 text-zinc-900">
                Asc
              </button>
              <button className="min-w-[4rem] rounded-sm bg-white px-2 py-1 text-zinc-900">
                Desc
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-lg text-zinc-400">Contries total</h2>
            <span className="text-4xl font-bold">{countriesCount}</span>
          </div>
        </header>

        <div className="flex flex-wrap gap-10">
          {isLoading
            ? Array(20)
                .fill('')
                .map((_, i) => <CoinCardSkeleton key={i} index={i} />)
            : activeCountries
                ?.sort((a, b) => b.coinCount - a.coinCount)
                .map((country, i) => (
                  <CoinCard index={i} key={country?.name} {...country} />
                ))}
        </div>
      </Container>
    </main>
  )
}
