"use client"

import { AnnaProvider } from "@/utils/annaContext"
import { PageHeader } from "@/components/PageHeader"
import { CardList } from "@/components/CardList"
import {PageFooter} from "@/components/PageFooter"

export default function Home() {
  return (
    <AnnaProvider>
      <PageHeader />
      <CardList />
      <PageFooter />
    </AnnaProvider>
  )
}
