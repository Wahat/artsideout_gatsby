import React from 'react';
import { Text, Heading, SimpleGrid, Box, Avatar, Flex, Link } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import * as kelcie from '../images/kelcie.jpg'
import * as ryan from '../images/ryan.jpg'
import * as meera from '../images/meera.jpg'
import * as michael from '../images/michael.jpg'
import * as aquaribliz from '../images/aquaribliz.jpg'

const MarketPage = () => {

  const test = [
    {
      "name": "Ryan Bucao",
      "image": "https://media.graphcms.com/vnDmM2ubTM6wGGXNC68c",
      "bio": "I'm Ryan Bucao, 4th year at UTSC, majoring in psychology and a double minor in media studies and economics. I joined SoundWaves last January and was immediately impressed by the creativity of its members. \n\nI started with the piano when I was a toddler. I went to piano school briefly but dropped out and taught myself by ear. I've also played the tenor saxophone for seven years and, momentarily, the drums. \nIn sixth grade, I was gifted FL Studio by my best friend. I've used MIDI ever since. In 2018, at Mary Ward CSS, I received the Music and Computers Senior Award for my MIDI projects, among them a 15-minute medley of Star Wars that took four months to arrange.\n Currently, I'm learning jazz theory, FM synthesis, and intermediate guitar. ",
      "desc": "For my piece, I wrote a triphop track, inspired by the kung fu scene from The Matrix. The soundtrack played during that scene was a modified version of Leave You Far Behind by Lunatic Calm. I also drew upon elements from the music of Crystal Method, Leftfield, and Fluke.\nThe pandemic in which we presently find ourselves can be said to be reminiscent of The Matrix. Many were interrupted from a familiar daily routine and forced to decide whether to reject or accept a new reality. We were to adopt an unusual perspective of how things were, one disconnected from it, looking in from the outside.\nThe pandemic continues to demand our patience, and it requires us all a collective effort to protect each other. So, we must together endure.",
      "links": [
        {
          "type": "Instagram",
          "url": "https://www.instagram.com/ryanrbmusic/",
        }
      ]
    },
    {
      "name": "Kelcie",
      "image": "https://media.graphcms.com/kRc5a8iTvaiEOQeqBGSG",
      "bio": "I’m currently in my second year at UTSC, hoping to major in Music & Culture as well as minor in Culture, Creativity and Cities & Lit + Film Studies. I started taking voice lessons at the age of ten and continued to take them for seven years. Growing up, I was very shy, and music served as an escape for me. It was a way for me to express myself in ways I wouldn’t otherwise know how to. I love to sing in a variety of different genres, including Pop, EDM, R&B, and some Alternative and Rock.  As I started to gain more confidence in my musical abilities, about 2 years ago I start posting covers on YouTube. I also took a couple of courses with Berklee Online last year. It wasn’t until I got to know about the music community at UTSC, this past year, that I truly realized my passion for music and that there’s a lot more that I can do with it so long as I am confident.  In terms of song-writing, I didn’t really plan on doing anything with it when I started writing lyrics about two years ago. It was just a way for me to express myself. ",
      "desc": "Emotions can be a real burden when you are going through a tough time. Enduring these emotions, despite feeling a sense of uncertainty help build resilience. That is at the heart of my piece and how you choose to deal with it is the message that I tried to express. ",
      "links": [
        {
          "type": "Youtube",
          "url": "https://www.youtube.com/channel/UCIEsjAyWOemTpp2QkjgW4iw",
        },
        {
          "type": "Instagram",
          "url": "https://www.instagram.com/k3lci3_d/",
        }
      ]
    },
    {
      "name": "Meera",
      "image": "https://media.graphcms.com/HLMci1HRYipIuWLgOyB1",
      "bio": "I am a third-year student pursuing a specialist in Biodiversity + Conservation and a minor in Music & Culture. Music has played a significant role in my life since I was very young but I’ve only recently become interested in composing. I’m mainly self-taught and have been enjoying learning to write for small ensemble and concert band. Endurance is my first piece for flute quintet. ",
      "desc": "This piece for flute quintet is meant to symbolize Endurance by describing one possible perspective of someone’s experience with hardship or pain. The first section is slower and mournful, representing the initial struggle of encountering a challenge. The middle section is faster, more hectic and less melodic, representing someone working through a difficult time. Finally, the last section brings everything together by adding a new melody on top of the first section that is meant to weave everything together, and symbolize everyone coming back together after the pandemic, that being the universal struggle we’re all facing together. ",
      "links": [
      ]
    },
    {
      "name": "wareblewan AKA Michael Wan",
      "image": "https://media.graphcms.com/xFgkoM5bR8yNCpifVcIc",
      "bio": "I am a third-year university student who studies mathematics as well as music. I have had a growing relationship with music ever since I started learning piano at the age of 6, and have progressed slowly until now when I am able to compose and produce my own original music! I like to look into how different elements of music might be analyzed, and try to find new ways to think about and feel the music.",
      "desc": "This piece is a medley of five tunes from five different video game soundtracks. Each of these tunes either explicitly are about determination or endurance or portrays some feeling of loss similar to the losses we all face at some point. Linking these pieces together cohesively was somewhat difficult, but it all came through in the end, which is why we all endure hardships.",
      "links": [
      ]
    },
    {
      "name": "Aquaribliz",
      "image": "https://media.graphcms.com/7voKTzYOQUuiWo6SVvjv",
      "bio": "2nd year UTSC student double-majoring Environmental Science and Environmental Studies. Experienced flutist. Rookie composer with interests in all sorts of genres, from EDM, R&B to orchestral and classical music. ",
      "desc": "“I wanted to capture the process of endurance from start to end with this composition. To me, the concept of endurance is starting a goal that seems vague at first. As a result, I started off with some gloomy, dreamy mallet style elements to illustrate the vagueness. When the blaring horns and drum kit mix start kicking in, we reach the stage where we totally commit ourselves to a goal without any more hesitation. The twist in the middle section illustrates how endurance can shed light to a different perspective towards your goal as long as you don’t give up. And the piece ends with a solid orchestral harmony to indicate the fruits of perseverance.”",
      "links": [
      ]
    }
  ]


  return (
    <Layout>
      <Seo title="Art Market" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
        marginBottom="20px"
      >
        ASO X Soundwaves
      </Heading>
      <Flex>
        <Heading
          as={Text}
          size="md"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="20px"
        >
          Contact
        </Heading>
        <Link marginLeft="15px" target="_blank" href="https://www.instagram.com/soundwaves_utsc/">Instagram</Link>
        <Link marginLeft="15px" target="_blank" href="https://discord.gg/5rWERtXe7z">Discord</Link>
      </Flex>

      <Heading
        as={Text}
        size="md"
        fontWeight="normal"
        textAlign={['center', 'center', 'left', 'left']}
        marginBottom="20px"
      >
        SoundWaves is UTSC’s newest and only music composition club. We meet online every Tuesday 1-2pm on zoom, and hopefully soon in person. At SoundWaves we write or contribute to new works of music every week. Our meetings are centered around the sharing of our weekly assigned projects and other collaborations in music. We are open to anyone who is interested in music composition and most meetings are free for drop in. To become a member of SoundWaves, please join our discord and introduce yourself there!
      </Heading>

      <Heading
        as={Text}
        size="md"
        fontWeight="normal"
        textAlign={['center', 'center', 'left', 'left']}
        marginBottom="40px"
      >
        This year, SoundWaves and ARTSIDEOUT have come together to share music relating to the theme of Endurance. Feel free to check out all the composers and their bios down below. You can listen to the playlist of Endurance in the media player.
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {test.map((artist) => {
          return (
            <Box padding="10px" width="600px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar size="lg" marginBottom="15px" src={artist.image} />
                <Heading
                  as={Text}
                  size="lg"
                  color="#E81D77"
                  marginBottom="20px"
                  textAlign={['center', 'center', 'left', 'left']}
                >{artist.name}</Heading>

                {artist.bio.split("\n").map((paragraph) => {
                  return (
                    <Heading
                      as={Text}
                      size="md"
                      fontWeight="light"
                      pb="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >{paragraph}</Heading>
                  )
                })}

                <Heading
                  as={Text}
                  size="md"
                  color="#E81D77"
                  marginBottom="20px"
                  textAlign={['center', 'center', 'left', 'left']}
                >Piece Description</Heading>

                {artist.desc.split("\n").map((paragraph) => {
                  return (
                    <Heading
                      as={Text}
                      size="md"
                      fontWeight="light"
                      pb="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >{paragraph}</Heading>
                  )
                })}

                {artist.links.map((link) => {
                  return (
                    <Link ><a target="_blank" href={link.url}>{link.type}</a></Link>
                  )
                })}

              </Flex>
            </Box>
          )
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default MarketPage;
