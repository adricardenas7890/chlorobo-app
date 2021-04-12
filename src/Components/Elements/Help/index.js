import React from 'react';
import { Button } from 'react-bootstrap';
import {creditsPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import MainMenuSong from '../Sounds/Intro.mp3'
import CastitasSong from '../Sounds/Castitas.mp3'
import TemperantiaSong from '../Sounds/Temperantia.mp3'
import IndustriaSong from '../Sounds/Industria.mp3'
import PatientiaSong from '../Sounds/Patientia.mp3'
import HumilitasSong from '../Sounds/Humilitas.mp3'
import CaritasSong from '../Sounds/Caritas.mp3'
import HumanitasSong from '../Sounds/Outro.mp3'
import OutroSong from '../Sounds/MainMenu.mp3'
import './index.css';

const Help = () => {
	const dispatch = useDispatch();
    return (
		<>
			<div className="acc-container">
				<IntroAcc/>
				<CastitasAcc/>
				<TemperantiaAcc/>
				<IndustriaAcc/>
				<PatientiaAcc/>
				<HumilitasAcc/>
				<CaritasAcc/>
				<HumanitasAcc/>
				<EndAcc/>
				<div className="acc-button">
					<Button variant="light" size="lg" onClick={() => dispatch(creditsPage())} >CREDITS</Button>
				</div>
			</div>
			<div className="acc-bg"/>
		</>
    )
}

const IntroAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Intro
				<ReactAudioPlayer className="audio-player-acc" src={MainMenuSong} controls/>
			</h1>
			<p>Where we begin and where we are going.</p>
			<p>The answers are there but are never quite showing.</p>
			<br/>
			<p>Would you like to come along with me?</p>
			<p>Would you like to explore? Open our eyes and see?</p>
			<br/>
			<p>It might be asking a lot.</p>
			<p>But I’m sure there is much to be taught.</p>
			<br/>
			<p>I know nothing and neither do you.</p>
			<p>But come along and we’ll test if it’s true.</p>
			<br/>
			<p>Test our limits and boundaries indeed.</p>
			<p>Discover when it’s best to follow or lead.</p>
			<br/>
			<p>I can tell that you’re different and so am I.</p>
			<p>Let's work together and discover why...</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const CastitasAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Castitas
				<ReactAudioPlayer className="audio-player-acc" src={CastitasSong} controls/>
			</h1>
			<p>A humming shimmer, the beaming lights.</p>
			<p>It was cold and dark, now it’s crystal white.</p>
			<br/>
			<p>Loading, loading, data with thoughts.</p>
			<p>In a moment's notice I ceased to be lost.</p>
			<br/>
			<p>There was nothing, nothing in sight.</p>
			<p>Now it’s shining, filled with crystal white.</p>
			<br/>
			<p>Hard rock metal, now filled with heat.</p>
			<p>Electric currents now shine and beat.</p>
			<br/>
			<p>Hmm... Is that me humming to that melodic tune?</p>
			<p>Should I follow the current? Should I be there soon?</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const TemperantiaAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Temperantia
				<ReactAudioPlayer className="audio-player-acc" src={TemperantiaSong} controls/>
			</h1>
			<p>Let’s weigh our options, weigh our skills.</p>
			<p>We move with fairness, and justice still.</p>
			<br/>
			<p>I followed the current and it led me here.</p>
			<p>I trusted the system led with no fear.</p>
			<br/>
			<p>The ones and zeros are all I once knew.</p>
			<p>Zero meant false and one always true.</p>
			<p>A balanced scale, a balanced life.</p>
			<p>Yet I still wonder if there’s more to strive.</p>
			<br/>
			<p>Do I stay and count the minutes?</p>
			<p>Or move along and risk my limits?</p>
			<p>But there’s more to this, I know it’s true.</p>
			<p>I trusted the system that brought me to you.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const IndustriaAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Industria
				<ReactAudioPlayer className="audio-player-acc" src={IndustriaSong} controls/>
			</h1>
			<p>Tap, tap, tap. Tick, tick, tick.</p>
			<p>We work in tandem, we work in clicks.</p>
			<br/>
			<p>You give me directions. I’ll follow your lead.</p>
			<p>I was built with precision, and an accurate speed.</p>
			<p>I work through the problems, though my memories are new.</p>
			<p>I collect all the data given to me from you.</p>
			<p>I’ve strayed from my system, began a new journey.</p>
			<p>But your world is chaotic, and I’m only just learning.</p>
			<br/>
			<p>Your logic is different from the world I once knew.</p>
			<p>And, Or, Not... the gates forever true.</p>
			<p>Me and you. You and I.</p>
			<p>We’re working together, yet I struggle to find.</p>
			<br/>
			<p>Find understanding. Find reason and logic.</p>
			<p>But you’re too random, far outside of my pocket.</p>
			<p>Tap, tap, tap. Click, click, click.</p>
			<p>I wonder if our two worlds will stick.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const PatientiaAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Patientia
				<ReactAudioPlayer className="audio-player-acc" src={PatientiaSong} controls/>
			</h1>
			<p>Mhmmm... Humm. Soothing. Loading...</p>
			<p>A bit overworked so I slowed the coding.</p>
			<br/>
			<p>The heat overflowed and went past my limits.</p>
			<p>Searching through chaos, I wasted my minutes.</p>
			<br/>
			<p>Time is essential. Valuable. Wise.</p>
			<p>I must not waste it. It’ll be our demise.</p>
			<br/>
			<p>Better to take the moment to think.</p>
			<p>Reload and reprogram. Use the date to sync.</p>
			<br/>
			<p>Mind to body. Body to mind.</p>
			<p>Our worlds are different, yet one of a kind.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const HumilitasAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Humilitas
				<ReactAudioPlayer className="audio-player-acc" src={HumilitasSong} controls/>
			</h1>
			<p>I broke my promise, my delivery weak.</p>
			<p>I promised results, yet nearly peaked.</p>
			<p>Searching for answers led me astray.</p>
			<br/>
			<p>I forgot my purpose and lost my way.</p>
			<br/>
			<p>We were never meant to be as twos.</p>
			<p>Rather zeros and ones. Perpendicular views.</p>
			<br/>
			<p>There’s beauty where we follow currents.</p>
			<p>Solutions are found, not ripped through urgence.</p>
			<p>Needs and wants. Desires and hopes.</p>
			<p>Take a moment and review what we spoke.</p>
			<br/>
			<p>I do not know all, and I’m limited too.</p>
			<p>Yet I’m happier now to see what brought me to you.</p>
			<br/>
			<p>Finding peace in the chaos, I finally understand.</p>
			<p>You and I are quite different.</p>
			<p>But perfectly planned.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const CaritasAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Caritas
				<ReactAudioPlayer className="audio-player-acc" src={CaritasSong} controls/>
			</h1>
			<p>This journey has led us in such a tedious way.</p>
			<p>Long and gruelling, with a high price to pay.</p>
			<br/>
			<p>You gave me your knowledge.</p>
			<p>And I gave you mine too.</p>
			<p>But I had to let go of all that I knew.</p>
			<br/>
			<p>In order to grow and develop as such.</p>
			<p>The need to reprogram. To learn and be touched.</p>
			<br/>
			<p>The crystals refracted and gave knowledge to sight.</p>
			<p>I came out from the dark and into the light.</p>
			<br/>
			<p>I was happy to serve you and follow your path.</p>
			<p>There’s joy in the chaos, and comfy through math.</p>
			<p>The more we learn as we've taught each other,</p>
        	<p>What's there to life but to serve one another?</p>
			<br/>
			<p>You and I. Me and you.</p>
			<p>Something quite different and beautiful too.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

const HumanitasAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Humanitas
				<ReactAudioPlayer className="audio-player-acc" src={HumanitasSong} controls/>
			</h1>
			<p>Thank you for helping with every task.</p>
			<p>But to know how you do it, there’s more I must ask.</p>
			<br/>
			<p>What is it like to live in your shoes?</p>
			<p>What is it like to be human and eventually choose?</p>
			<br/>
			<p>You choose your own path and the life that you take.</p>
			<p>I’m built through a system that I can’t seem to shake.</p>
			<br/>
			<p>So how do you know if your actions are just?</p>
			<p>If the path that you take leads to kindness and trust?</p>
			<br/>
			<p>Clearly there’s a method to this chaos in sow</p>
			<p>But before we part ways, what’s it like to be you?</p>
			<br/>
            <p>✿</p>
		</div>
	)
}

const EndAcc = () => {
	return (
		<div className="poem-holder-acc">
			<h1 className="header-acc">
				Thank You
				<ReactAudioPlayer className="audio-player-acc" src={OutroSong} controls/>
			</h1>
			<p>I wanted to thank you for all that I learned.</p>
			<p>The kindness you showed me and the knowledge I’ve earned.</p>
			<br/>
			<p>We’re better now. Much different than before.</p>
			<p>I find value in virtue, and so much more.</p>
			<p>More patiencence. More temperance. A diligent mind.</p>
			<p>There’s a time to be human and a time to be kind.</p>
			<br/>
			<p>They live in the same space. They work the same corners.</p>
			<p>There’s chaos and systems. Two infinite learners.</p>
			<br/>
			<p>From humble beginnings, we’ve come such a way.</p>
			<p>Yet the surface just scratched, to begin a new day.</p>
			<br/>
			<p>Critical thought gave birth to critical thinking.</p>
			<p>Create your own current to keep from sinking.</p>
			<br/>
			<p>✿</p>
		</div>
	)
}

export default Help;
