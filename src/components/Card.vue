<template>
	<section class="form-container">
		<article class="credit-card">
		<!-- This is the tag that receives the spin effect. Here, the effect trigger 
		also occurs when the ccv field receives focus -->
			<div class="spin" :style="spin == 1 ? 'transform: rotateY(180deg)' : ''">
				<div class="front">
					<img class="chip" alt="Chip" :src="image">
					<div class="logo">
						<svg id="visa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47px">
							<path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893zM34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066h-3.888L19.153,16.8z"/>
						</svg>
					</div>
					<!-- Here happens the effect of the mask on the card number.  -->
					<p class="card-number">{{number | card}}</p>
						<article class="card-holder">
							<label>Card holder</label>
							<span>{{holder}}</span>
						</article>
						<article class="expiration-date">
							<label>Expires</label>
							<span>
								{{month}}
								<span v-show="month != '' || year != ''">/</span>
								{{year}}
							</span>
						</article>
				</div>
				<div class="back">
					<article class="strip"></article>
					<div class="logo">
						<svg id="visa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47px">
							<path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893zM34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066h-3.888L19.153,16.8z"/>
						</svg>
					</div>
					<article class="ccv">
						<label>CCV</label>
						<b>{{ccv}}</b>
					</article>
				</div>
			</div>
		</article>
		<!-- This is the message component that appears only when the form is successfully submitted. -->
		<!-- The content can be edited by changing the "message" Prop -->
		<Message v-if="successPurchase == true" message="Successful Purchase"/>
		<form @submit="buy" class="field">
			<label class="label label-full">Card Number</label>
			<!-- Here is the validation that allows the user to write only the correct types of characters -->
			<input type="text" class="input" v-model="number" minlength="13" maxlength="16" pattern="[0-9]+$" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required >
			<label class="label label-full">Card Holder</label>
			<input type="text" class="input" v-model="holder" minlength="3" maxlength="18" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required >
			<!-- Here I decided to use the Bulma's columns. -->
			<!-- Documentation: https://bulma.io/documentation/columns/basics/ -->
			<article class="inline-form-card columns">
				<article class="column">
					<div class="columns is-mobile">
						<article class="column is-two-fifths">
							<label class="label">Month</label>
							<div class="select is-normal">
								<select v-model="month" required>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
									<option>9</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
								</select>
							</div>
						</article>
						<article class="column">
							<label class="label">Year</label>
							<div class="select is-normal">
								<select v-model="year" required>
									<option>2022</option>
									<option>2023</option>
									<option>2024</option>
									<option>2025</option>
									<option>2026</option>
									<option>2027</option>
									<option>2028</option>
									<option>2029</option>
									<option>2030</option>
									<option>2031</option>
									<option>2032</option>
									<option>2033</option>
									<option>2034</option>
									<option>2035</option>
									<option>2036</option>
									<option>2037</option>
									<option>2038</option>
									<option>2039</option>
									<option>2040</option>
									<option>2041</option>
									<option>2042</option>
								</select>
							</div>
						</article>
					</div>
				</article>
				<article class="column">
					<label class="label">CCV</label>
					<!-- This is the trigger that spin the card when the CCV receives the focus -->
					<input type="text" @focus="rotate" @blur="rotate" class="input hover" v-model="ccv" minlength="2" maxlength="3" onkeypress="return event.charCode >= 48 && event.charCode <= 57" pattern="[0-9]+$" required >
				</article>
			</article>
			<input type="submit" value="Buy Product" class="button-buy"/>
		</form>
	</section>
</template>

<script>
import image from "../assets/img/chip.png"
import Message from "./Message.vue"
export default {
	name:"Card",
	components:{
		Message
	},
	data(){
		return{
			successPurchase: false,
			image: image,
			spin: 0,
			// Card Content:
			number: "",
			holder: "",
			year: "",
			month: "",
			ccv: "",
		}
	},
	methods:{
		buy(e) {
			e.preventDefault()
			try{
				// Getting the card data
				const number = this.number;
				const holder = this.holder;
				const expiration = `${this.month}/${this.year}`;
				const ccv = this.ccv
				// This is the output on Console.log
				console.log(`Card Number: ${number}\nCard Holder: ${holder}\nExpiration: ${expiration}\nCCV: ${ccv}\n`)
				// Cleaning the input fields
				this.number = "";
				this.holder= "";
				this.month = "";
				this.year = "";
				this.ccv = ""
				// This is the trigger to show the success message and the duration can be chaging updating the time in SetTimeout()
				this.successPurchase = true
				setTimeout(()=> this.successPurchase = false ,2800)
			}catch{
				console.log("Error")
			}
		},
		// Function that rotates the card when the CCV input receives the focus
		rotate(){
			if(this.spin == 0){
				this.spin = 1
			}else{
				this.spin = 0
			}
		}
	},
	// This is the mask of empty space that happens in the card number
	filters:{
		card: function(value){
			var cardNumber = value;
			var first = cardNumber.slice(0,4)
			var second = cardNumber.slice(4,8)
			var third = cardNumber.slice(8,12)
			var fourth = cardNumber.slice(12,16)
			var newFormat = `${first} ${second} ${third} ${fourth}`
			return newFormat
		}
	}
}
</script>
<style src="../assets/css/card.css" scoped></style>
<style src="../assets/css/form.css" scoped></style>