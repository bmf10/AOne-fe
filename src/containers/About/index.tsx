import Title from "@/components/Title"
import Image from "next/image"
import { FC } from "react"

const About: FC = () => {
  return (
    <>
      <Title title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-xl mb-3">Lorem, ipsum dolor sit amet</h1>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ullamcorper malesuada proin libero
            nunc consequat interdum varius sit. Velit scelerisque in dictum non
            consectetur a erat nam. Mattis aliquam faucibus purus in massa
            tempor nec feugiat. Morbi quis commodo odio aenean sed adipiscing
            diam donec adipiscing. Neque gravida in fermentum et sollicitudin ac
            orci phasellus egestas. Tellus elementum sagittis vitae et. Eu
            volutpat odio facilisis mauris sit amet massa. Tristique magna sit
            amet purus. Suspendisse ultrices gravida dictum fusce ut placerat
            orci nulla. Ac auctor augue mauris augue neque gravida. Nulla
            pharetra diam sit amet nisl suscipit adipiscing bibendum. Egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium. Pellentesque sit amet porttitor eget dolor. Turpis
            tincidunt id aliquet risus feugiat in ante. Interdum velit laoreet
            id donec. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
            Tempus urna et pharetra pharetra massa. Tellus orci ac auctor augue
            mauris.
            <br />
            <br />
            Feugiat in fermentum posuere urna nec. Nisl rhoncus mattis rhoncus
            urna neque viverra justo nec. Massa id neque aliquam vestibulum. Id
            eu nisl nunc mi ipsum faucibus. Urna duis convallis convallis tellus
            id interdum velit laoreet id. Mattis enim ut tellus elementum
            sagittis vitae et leo duis. Vel orci porta non pulvinar neque
            laoreet suspendisse interdum consectetur. A diam maecenas sed enim
            ut sem viverra aliquet eget. Morbi tincidunt ornare massa eget
            egestas. Aliquam sem fringilla ut morbi tincidunt augue interdum.
            Neque egestas congue quisque egestas diam. Eu augue ut lectus arcu
            bibendum at. Facilisi morbi tempus iaculis urna id volutpat lacus
            laoreet non. Lobortis mattis aliquam faucibus purus. Lobortis
            feugiat vivamus at augue eget arcu dictum varius. Praesent elementum
            facilisis leo vel. Maecenas volutpat blandit aliquam etiam erat.
          </p>
        </div>
        <Image
          src="https://source.unsplash.com/random/800x800/?img=1"
          width={800}
          height={800}
          alt="about-img"
          className="rounded-3xl"
        />
      </div>
    </>
  )
}

export default About
