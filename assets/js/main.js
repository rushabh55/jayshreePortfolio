/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Source-aware WhatsApp links.
		$('[data-whatsapp-source]').on('click', function(event) {

			var $link = $(this),
				source = $link.attr('data-whatsapp-source') || 'general',
				intent = $link.attr('data-whatsapp-intent') || 'general',
				phone = '919869074038',
				messages = {
					'home-nav': [
						'Hello Dr Jayshree, I came across your website and wanted to know a little more about your consultations. When you have a moment, I would be glad to hear from you.',
						'Hello Dr Jayshree, I was reading about your clinic and felt encouraged to reach out. I would love to know a little more about how you guide your patients.',
						'Hello Dr Jayshree, I found your website and wanted to connect. If possible, I would be grateful to know more about your consultation process.',
						'Hello Dr Jayshree, I came across your work and wanted to reach out gently. I would appreciate learning more about how one can consult with you.',
						'Hello Dr Jayshree, your clinic felt very reassuring to me. I would be glad to know a little more about your services when convenient.',
						'Hello Dr Jayshree, I discovered your website today and felt drawn to your approach. I would appreciate knowing how to begin.',
						'Hello Dr Jayshree, I was reading about your clinic and wanted to ask about consultations. Please share whenever you are comfortable.',
						'Hello Dr Jayshree, I found your website and wanted to connect with care. I would be grateful to know how you usually guide new patients.',
						'Hello Dr Jayshree, I came across your clinic online and wanted to reach out. I would love to understand how consultations with you usually begin.',
						'Hello Dr Jayshree, I was happy to find your website and wanted to know more about your services. Whenever possible, please do let me know.'
					],
					'homeopathy': [
						'Hello Dr Jayshree, I am looking for homeopathic treatment and felt encouraged to reach out to you. I would be grateful to know how I might consult with you.',
						'Hello Dr Jayshree, I am hoping to explore homeopathic treatment for my health concerns. When you have time, I would love to know how to begin.',
						'Hello Dr Jayshree, I am interested in homeopathic care and your approach felt very reassuring. Please let me know how one can connect with you for guidance.',
						'Hello Dr Jayshree, I would like to seek homeopathic treatment and felt comforted by your way of care. I would be grateful to hear how I may consult you.',
						'Hello Dr Jayshree, I have been considering homeopathic treatment and wanted to reach out to you personally. Whenever convenient, please share how to proceed.',
						'Hello Dr Jayshree, I am looking for thoughtful homeopathic guidance and would be glad to connect with you. Please let me know the next step whenever possible.',
						'Hello Dr Jayshree, I would like to understand whether homeopathic treatment may help in my situation. I would appreciate knowing how I can consult with you.',
						'Hello Dr Jayshree, I am searching for gentle and holistic treatment and wanted to reach out about homeopathy. Please guide me whenever you can.',
						'Hello Dr Jayshree, I felt a sense of trust reading about your homeopathic care. I would be grateful to know how I might book a consultation with you.',
						'Hello Dr Jayshree, I am hoping to begin homeopathic treatment and wanted to connect with you. Please let me know how I may take this forward.'
					],
					'home-testimonials-attentive-listening': [
						'Hello Dr Jayshree, I would like to speak with you about a few health concerns. I would feel grateful for your guidance on how to begin.',
						'Hello Dr Jayshree, I am reaching out with the hope of finding calm and thoughtful care. Please let me know how I may connect with you.',
						'Hello Dr Jayshree, I would like to share some health concerns and seek your guidance. Whenever possible, please tell me how I may consult with you.',
						'Hello Dr Jayshree, I am looking for a consultation and your approach felt very comforting. I would appreciate knowing how to begin.',
						'Hello Dr Jayshree, I would be grateful to speak with you regarding my health concerns. Please let me know the best way to proceed whenever you can.',
						'Hello Dr Jayshree, I felt encouraged by the way your care is described and wanted to reach out. I would appreciate knowing how to consult with you.',
						'Hello Dr Jayshree, I am hoping to find guidance for my health and would love to connect with you. Please share how I may begin when convenient.',
						'Hello Dr Jayshree, I would like to reach out regarding a consultation. Your way of listening and guiding felt very reassuring to me.',
						'Hello Dr Jayshree, I am seeking care for some health concerns and wanted to connect with you personally. Please let me know how to take the next step.',
						'Hello Dr Jayshree, I would like to consult with you and understand how your process works. Whenever possible, please do guide me.'
					],
					'home-testimonials-clear-guidance': [
						'Hello Dr Jayshree, your approach felt very reassuring to me. I would be grateful to know how I may book a consultation with you.',
						'Hello Dr Jayshree, I felt comforted reading about your work and wanted to reach out. Please let me know how I can consult with you when convenient.',
						'Hello Dr Jayshree, your style of guidance felt warm and clear. I would appreciate knowing how one may begin treatment with you.',
						'Hello Dr Jayshree, I would like to consult with you after reading about your approach to care. Whenever possible, please share the next step.',
						'Hello Dr Jayshree, your clinic felt very thoughtful and grounded. I would be glad to know how I may arrange a consultation.',
						'Hello Dr Jayshree, I was drawn to the way your care is described and wanted to connect. Please let me know how I can book time with you.',
						'Hello Dr Jayshree, reading about your guidance gave me confidence to reach out. I would appreciate knowing how to proceed for a consultation.',
						'Hello Dr Jayshree, I am interested in speaking with you after learning about your work. Please guide me on how consultations are arranged.',
						'Hello Dr Jayshree, I felt a sense of trust reading your website and wanted to connect. I would be grateful to know how to begin with you.',
						'Hello Dr Jayshree, I would love to consult with you and learn more about your care. Whenever convenient, please let me know how to proceed.'
					],
					'home-testimonials-continuity-of-care': [
						'Hello Dr Jayshree, I am looking for ongoing guidance for my health and would be grateful to know how I may consult with you.',
						'Hello Dr Jayshree, I am hoping to find a doctor I can continue with over time. I would appreciate knowing how I can begin with you.',
						'Hello Dr Jayshree, I am looking for steady and long-term guidance for my health. Please let me know how I may connect with you when possible.',
						'Hello Dr Jayshree, I would value care that feels consistent and personal over time. I would be grateful to know how consultations with you begin.',
						'Hello Dr Jayshree, I am searching for continuing support for my health and wellbeing. Please share how I may consult with you whenever convenient.',
						'Hello Dr Jayshree, I am looking for thoughtful care I can return to with confidence. I would appreciate knowing the next step to connect with you.',
						'Hello Dr Jayshree, I would like to understand how I may start ongoing care with you. Please guide me when you have a moment.',
						'Hello Dr Jayshree, I am hoping to find a practitioner for long-term support and felt drawn to your clinic. Please let me know how to begin.',
						'Hello Dr Jayshree, I am looking for sustained care for my health concerns and wanted to reach out. I would be glad to know how to proceed.',
						'Hello Dr Jayshree, I would be grateful for guidance on starting consultations with you for more regular, ongoing care.'
					],
					'home-contact': [
						'Hello Dr Jayshree, I would like to get in touch regarding a consultation. Whenever convenient, please let me know how I may proceed.',
						'Hello Dr Jayshree, I am reaching out to enquire about consulting with you. I would be grateful for a little guidance on the next step.',
						'Hello Dr Jayshree, I wanted to connect with you regarding your clinic and consultations. Please let me know how I may begin when possible.',
						'Hello Dr Jayshree, I am interested in consulting with you and would appreciate knowing how to take this forward gently.',
						'Hello Dr Jayshree, I would be grateful to connect regarding a consultation. Please share how I may reach you best whenever convenient.',
						'Hello Dr Jayshree, I am hoping to speak with you about your services and consultations. Please let me know how I can proceed.',
						'Hello Dr Jayshree, I wanted to reach out with interest in your care. I would appreciate a little guidance on how to begin.',
						'Hello Dr Jayshree, I am looking to understand how I may consult with you. Please let me know whenever you are comfortable.',
						'Hello Dr Jayshree, I came here looking for guidance and wanted to connect. I would be grateful to know the next step.',
						'Hello Dr Jayshree, I would like to enquire about consulting with you. Please let me know how I may proceed when possible.'
					],
					'mothers-nav': [
						'Hello Dr Jayshree, I am expecting and wanted to know more about the support you offer for mothers and babies. I would be grateful to hear from you.',
						'Hello Dr Jayshree, I am pregnant and would love to know a little more about your programs for mothers and babies. Please guide me when convenient.',
						'Hello Dr Jayshree, I came across your mothers page and felt encouraged to reach out. I would be glad to know how you support expecting mothers.',
						'Hello Dr Jayshree, I am looking for guidance during pregnancy and after delivery. Please let me know more about how you may be able to help.',
						'Hello Dr Jayshree, I am expecting and wanted to connect with you about your programs for mothers. Whenever possible, please share some details.',
						'Hello Dr Jayshree, I would like to know more about the support you offer during pregnancy and early motherhood. I would appreciate your guidance.',
						'Hello Dr Jayshree, I am looking for gentle support during this pregnancy journey and wanted to reach out. Please let me know more when you can.',
						'Hello Dr Jayshree, I would be grateful to know more about your pregnancy and postpartum programs. Please share whenever convenient.',
						'Hello Dr Jayshree, I felt reassured reading about your support for new and expecting mothers. I would love to know how I may begin.',
						'Hello Dr Jayshree, I am hoping for guidance during pregnancy and after birth. Please let me know a little more about your available programs.'
					],
					'nutrition': [
						'Hello Dr Jayshree, I would like to know more about nutrition guidance during pregnancy and after delivery. I would be grateful for your guidance.',
						'Hello Dr Jayshree, I am hoping for some support with pregnancy nutrition and recovery after birth. Please let me know more when convenient.',
						'Hello Dr Jayshree, I would love to understand how you guide mothers with nutrition during pregnancy and postpartum. Please share a little more if possible.',
						'Hello Dr Jayshree, I am looking for thoughtful guidance on food and nourishment during pregnancy. I would be glad to hear from you.',
						'Hello Dr Jayshree, I would appreciate some guidance on nutrition for myself and my baby during this stage. Please let me know how to connect.',
						'Hello Dr Jayshree, I am interested in your nutrition support during pregnancy and after delivery. Whenever convenient, please do share more.',
						'Hello Dr Jayshree, I am trying to understand how best to support my body and my baby through nutrition. I would be grateful for your guidance.',
						'Hello Dr Jayshree, I would like to know more about healthy nourishment during pregnancy and early recovery. Please let me know when possible.',
						'Hello Dr Jayshree, I am looking for gentle and practical nutrition guidance during pregnancy. I would appreciate hearing from you.',
						'Hello Dr Jayshree, I would love to know more about your approach to nutrition for mothers and babies. Please guide me whenever you can.'
					],
					'exercise': [
						'Hello Dr Jayshree, I would like to ask about safe exercise and movement guidance during and after pregnancy. I would be grateful for your advice.',
						'Hello Dr Jayshree, I am hoping for gentle guidance on exercise during pregnancy. Please let me know more when convenient.',
						'Hello Dr Jayshree, I would love to understand what kind of safe movement support you offer during pregnancy and recovery after birth.',
						'Hello Dr Jayshree, I am looking for practical exercise guidance during this stage of pregnancy. I would appreciate your direction.',
						'Hello Dr Jayshree, I wanted to ask about movement and exercise support for comfort and recovery during pregnancy and after delivery.',
						'Hello Dr Jayshree, I am hoping to stay active safely during pregnancy and would be grateful to know how you guide mothers with this.',
						'Hello Dr Jayshree, I would like a little support around exercise and body comfort during pregnancy. Please share more when possible.',
						'Hello Dr Jayshree, I am interested in safe movement practices during pregnancy and after birth. I would appreciate your guidance.',
						'Hello Dr Jayshree, I would be glad to know more about your exercise guidance for mothers during pregnancy and recovery.',
						'Hello Dr Jayshree, I am looking for support with gentle exercise and mobility during pregnancy. Please let me know how I may connect.'
					],
					'lactation': [
						'Hello Dr Jayshree, I am looking for some guidance with breast feeding and early postpartum care. I would really value your support.',
						'Hello Dr Jayshree, I am needing a little support with breast feeding and would feel grateful for your guidance when possible.',
						'Hello Dr Jayshree, I have been looking for gentle help with breast feeding and early recovery after delivery. I would appreciate hearing from you.',
						'Hello Dr Jayshree, I am finding breast feeding a little overwhelming and wanted to reach out for guidance. Whenever possible, please do let me know.',
						'Hello Dr Jayshree, I would be grateful for some support around lactation and early postpartum care. Please guide me when you have a moment.',
						'Hello Dr Jayshree, I am looking for reassuring guidance with breast feeding and the early days after delivery. I would love to know how to connect.',
						'Hello Dr Jayshree, I wanted to reach out for a little help with breast feeding and postpartum care. Your guidance would mean a lot.',
						'Hello Dr Jayshree, I am hoping for some calm support with lactation and feeding in these early days. Please let me know when convenient.',
						'Hello Dr Jayshree, I could really use some guidance with breast feeding and would be thankful to know how I may consult with you.',
						'Hello Dr Jayshree, I am looking for some warmth and guidance around breast feeding and postpartum care. Please share how I may reach you.'
					],
					'labour': [
						'Hello Dr Jayshree, I would like to know more about labour preparation and hypno birthing support. I would be grateful for your guidance.',
						'Hello Dr Jayshree, I am hoping to prepare for labour in a calmer and more confident way. Please let me know more when convenient.',
						'Hello Dr Jayshree, I would love to understand your approach to labour preparation and hypno birthing. Please guide me when possible.',
						'Hello Dr Jayshree, I am looking for some support in preparing emotionally and mentally for labour. I would appreciate hearing from you.',
						'Hello Dr Jayshree, I wanted to ask about your labour preparation guidance and how it may help me feel more calm and ready.',
						'Hello Dr Jayshree, I am interested in hypno birthing and gentle labour preparation. Please share more whenever you can.',
						'Hello Dr Jayshree, I would be grateful to know more about preparing for labour with confidence and calm. Please guide me when convenient.',
						'Hello Dr Jayshree, I am hoping for support in getting ready for labour and birth. I would appreciate learning more about your guidance.',
						'Hello Dr Jayshree, I wanted to reach out regarding labour preparation and hypno birthing. Please let me know how I may connect with you.',
						'Hello Dr Jayshree, I am looking for gentle support for labour preparation and would love to know more about your program.'
					],
					'welcome-home-baby': [
						'Hello Dr Jayshree, I would love to know more about the Welcome Home Baby program and how it helps mothers connect with their babies during pregnancy.',
						'Hello Dr Jayshree, I felt very drawn to the Welcome Home Baby program and would be grateful to know a little more about it.',
						'Hello Dr Jayshree, I am interested in learning how to connect with my baby during pregnancy and wanted to ask about your Welcome Home Baby program.',
						'Hello Dr Jayshree, the Welcome Home Baby program sounds very special to me. Please let me know more about how it works when convenient.',
						'Hello Dr Jayshree, I would love to understand how your Welcome Home Baby program supports bonding during pregnancy. Please share more when possible.',
						'Hello Dr Jayshree, I am hoping to build a deeper connection with my baby during pregnancy and would like to know more about this program.',
						'Hello Dr Jayshree, I wanted to reach out about the Welcome Home Baby program because it felt very meaningful to me. I would be grateful to hear more.',
						'Hello Dr Jayshree, I am interested in the Welcome Home Baby program and how it may support my baby\'s wellbeing during pregnancy. Please guide me.',
						'Hello Dr Jayshree, I would be glad to know more about the practices used in the Welcome Home Baby program and how mothers can begin.',
						'Hello Dr Jayshree, I am curious about the Welcome Home Baby program and would love to understand how it supports pregnancy bonding and development.'
					],
					'mothers-testimonials-calm-guidance': [
						'Hello Dr Jayshree, I have a few questions about your pregnancy support programs and would be grateful to know more.',
						'Hello Dr Jayshree, I am looking for calm guidance during pregnancy and wanted to reach out with a few questions.',
						'Hello Dr Jayshree, I would really appreciate some guidance around your support for expecting mothers. Please let me know more when possible.',
						'Hello Dr Jayshree, I felt comforted reading about your work and wanted to ask a few questions about your pregnancy support.',
						'Hello Dr Jayshree, I am hoping for gentle guidance during pregnancy and would love to know a little more about your care.',
						'Hello Dr Jayshree, I wanted to reach out with a few questions about your programs for mothers. I would appreciate hearing from you.',
						'Hello Dr Jayshree, I am looking for calm and supportive pregnancy guidance. Please let me know more whenever convenient.',
						'Hello Dr Jayshree, I would be grateful to ask a few questions about the care and support you offer during pregnancy.',
						'Hello Dr Jayshree, I am expecting and wanted to know more about your guidance for mothers. Please share when you have a moment.',
						'Hello Dr Jayshree, I am looking for reassurance during pregnancy and would appreciate learning more about your support.'
					],
					'mothers-testimonials-practical-support': [
						'Hello Dr Jayshree, I am looking for support during pregnancy and after delivery, and would like to understand how you can help.',
						'Hello Dr Jayshree, I would be grateful to know more about the practical support you offer through pregnancy and postpartum.',
						'Hello Dr Jayshree, I am hoping for guidance that I can actually use in day-to-day life during pregnancy and after birth. Please share more when possible.',
						'Hello Dr Jayshree, I am looking for hands-on support during pregnancy and the early weeks after delivery. I would appreciate your guidance.',
						'Hello Dr Jayshree, I wanted to ask how you support mothers through pregnancy, recovery, and early care at home.',
						'Hello Dr Jayshree, I am seeking practical and gentle support during this phase and would love to know more about your approach.',
						'Hello Dr Jayshree, I would be grateful to know how your support may help during pregnancy and after the baby arrives.',
						'Hello Dr Jayshree, I am looking for care that feels practical as well as reassuring. Please let me know more about how you help mothers.',
						'Hello Dr Jayshree, I wanted to reach out about your pregnancy and postpartum support. Please share more when convenient.',
						'Hello Dr Jayshree, I am hoping for some thoughtful support during pregnancy and after birth. I would appreciate hearing from you.'
					],
					'mothers-testimonials-continued-reassurance': [
						'Hello Dr Jayshree, I would like to know more about the support you offer during pregnancy and in the early days after birth.',
						'Hello Dr Jayshree, I am looking for guidance that continues beyond a session or two. Please let me know more about your support when possible.',
						'Hello Dr Jayshree, I would be grateful to know how you support mothers not just during pregnancy, but after delivery as well.',
						'Hello Dr Jayshree, I am hoping for care that feels steady and reassuring through pregnancy and postpartum. Please share more when you can.',
						'Hello Dr Jayshree, I wanted to know more about the kind of support you offer once the baby arrives and new questions come up.',
						'Hello Dr Jayshree, I am looking for support I can return to during pregnancy and early motherhood. I would appreciate learning more.',
						'Hello Dr Jayshree, I would love to understand how you continue supporting mothers during the early days after delivery.',
						'Hello Dr Jayshree, I am hoping to find reassuring support before and after birth. Please let me know more when possible.',
						'Hello Dr Jayshree, I would be grateful to know how your support continues through pregnancy and postpartum recovery.',
						'Hello Dr Jayshree, I am looking for gentle and dependable support during pregnancy and after birth. Please guide me when convenient.'
					],
					'mothers-testimonials-confidence-through-preparation': [
						'Hello Dr Jayshree, I am interested in preparing well for pregnancy and delivery, and would like more details about your programs.',
						'Hello Dr Jayshree, I would love to know more about your programs for preparing calmly and confidently for birth.',
						'Hello Dr Jayshree, I am hoping to feel more prepared for delivery and early motherhood. Please let me know more about your guidance.',
						'Hello Dr Jayshree, I am looking for support that helps me feel more ready for pregnancy and birth. I would be grateful to hear from you.',
						'Hello Dr Jayshree, I wanted to know more about how your programs help mothers feel informed and prepared before delivery.',
						'Hello Dr Jayshree, I am interested in preparation programs that feel gentle and supportive. Please share more when you can.',
						'Hello Dr Jayshree, I would appreciate learning more about the guidance you offer for pregnancy preparation and birth readiness.',
						'Hello Dr Jayshree, I am looking for a little more confidence as I prepare for delivery. Please let me know more about your programs.',
						'Hello Dr Jayshree, I would love to understand how your programs help mothers prepare for labour and the early days after birth.',
						'Hello Dr Jayshree, I am seeking supportive preparation for pregnancy and delivery and would be grateful to know more about your approach.'
					],
					'mothers-contact': [
						'Hello Dr Jayshree, I would like to know more about your New & Expecting Mothers programs and how I can get started.',
						'Hello Dr Jayshree, I am interested in your support for mothers and would be grateful to know how to begin with you.',
						'Hello Dr Jayshree, I wanted to reach out about your pregnancy and postpartum programs. Please let me know more when possible.',
						'Hello Dr Jayshree, I am looking for support during this motherhood journey and would love to know how I may connect with you.',
						'Hello Dr Jayshree, I would appreciate learning more about your programs for new and expecting mothers whenever convenient.',
						'Hello Dr Jayshree, I am reaching out with interest in your mothers programs and would be grateful to hear how I may begin.',
						'Hello Dr Jayshree, I wanted to enquire about your support for pregnancy and early motherhood. Please share more when you can.',
						'Hello Dr Jayshree, I am looking for gentle and experienced support during pregnancy and after delivery. I would love to know more.',
						'Hello Dr Jayshree, I would be grateful to know more about the care you offer for mothers and babies. Please guide me when possible.',
						'Hello Dr Jayshree, I am interested in your New & Expecting Mothers programs and would appreciate knowing the next step.'
					]
				},
				fallbacks = {
					consultation: [
						'Hello Dr Jayshree, I would like to understand how I may book a consultation with you. Please guide me when convenient.',
						'Hello Dr Jayshree, I am hoping to consult with you and would be grateful to know the next step.',
						'Hello Dr Jayshree, I would like to connect for a consultation. Please let me know how I may proceed when possible.',
						'Hello Dr Jayshree, I am interested in consulting with you and would appreciate a little guidance on how to begin.',
						'Hello Dr Jayshree, I would be grateful to know how I may arrange a consultation with you.',
						'Hello Dr Jayshree, I would like to seek your guidance through a consultation. Please let me know how to take this forward.',
						'Hello Dr Jayshree, I am looking to book a consultation and would appreciate knowing how to begin with you.',
						'Hello Dr Jayshree, I would love to connect with you for a consultation. Please share the next step whenever convenient.',
						'Hello Dr Jayshree, I am hoping to speak with you through a consultation. Kindly let me know how I may proceed.',
						'Hello Dr Jayshree, I would like to consult with you and would be grateful for a little guidance on how to start.'
					],
					program: [
						'Hello Dr Jayshree, I would like to know more about this program and whether it may be suitable for me.',
						'Hello Dr Jayshree, I felt drawn to this program and would be grateful to understand a little more about it.',
						'Hello Dr Jayshree, I would love to know more about this program and how it may support me during this stage.',
						'Hello Dr Jayshree, I am interested in this program and would appreciate hearing a little more whenever you can.',
						'Hello Dr Jayshree, I would be grateful to know more about this program and how one may begin.',
						'Hello Dr Jayshree, I wanted to enquire about this program and understand if it may be right for me.',
						'Hello Dr Jayshree, I am curious about this program and would love to know how it may help.',
						'Hello Dr Jayshree, I would like to understand this program better and would appreciate your guidance when possible.',
						'Hello Dr Jayshree, I am interested in learning more about this program in a little more detail. Please share when convenient.',
						'Hello Dr Jayshree, I would appreciate knowing more about this program and how it is usually guided.'
					],
					support: [
						'Hello Dr Jayshree, I am looking for some guidance and would be grateful to know how I may connect with you.',
						'Hello Dr Jayshree, I could use a little support in this area and would appreciate your guidance when possible.',
						'Hello Dr Jayshree, I am hoping for some gentle guidance and wanted to reach out to you personally.',
						'Hello Dr Jayshree, I am looking for support and would be thankful to know how I may consult with you.',
						'Hello Dr Jayshree, I would appreciate a little guidance in this area. Please let me know how I may reach you.',
						'Hello Dr Jayshree, I am hoping for your support and would be grateful to know the next step.',
						'Hello Dr Jayshree, I wanted to connect for some guidance and would appreciate hearing from you when convenient.',
						'Hello Dr Jayshree, I am in need of some support and would be glad to know how you may be able to guide me.',
						'Hello Dr Jayshree, I would love a little support in this area and would appreciate your guidance.',
						'Hello Dr Jayshree, I am looking for warm and steady guidance and wanted to reach out to you.'
					],
					general: [
						'Hello Dr Jayshree, I would like to know more about your services and how I may get in touch with you.',
						'Hello Dr Jayshree, I came across your work and would be grateful to know a little more about your services.',
						'Hello Dr Jayshree, I would love to know more about how you help your patients. Please share whenever convenient.',
						'Hello Dr Jayshree, I am reaching out to understand your services a little better and would appreciate hearing from you.',
						'Hello Dr Jayshree, I wanted to connect and learn more about your care and services.',
						'Hello Dr Jayshree, I am interested in your clinic and would appreciate knowing a little more when possible.',
						'Hello Dr Jayshree, I would be grateful to know more about your services and how one may begin with you.',
						'Hello Dr Jayshree, I came across your clinic and wanted to reach out with interest in your care.',
						'Hello Dr Jayshree, I would love to know a little more about your services and how best to connect with you.',
						'Hello Dr Jayshree, I am interested in your work and would appreciate a little guidance on how to get started.'
					]
				},
				messagePool = messages[source] || fallbacks[intent] || fallbacks.general,
				message = messagePool[Math.floor(Math.random() * messagePool.length)],
				url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

			event.preventDefault();
			window.open(url, '_blank', 'noopener');

		});

})(jQuery);
