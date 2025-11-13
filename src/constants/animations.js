export const socialPhraseAnimation = {
    from: {x: 250, opacity: 0},
    to: {x: 0, opacity: 1,  delay: 1.5, ease: 'power3.inOut'}
};

export const expCardAnimation = {
    from: { x: "-80%", opacity: 0 },
    to: { x: 0, opacity: 1, scrollTrigger: { trigger: "#section-2", scrub: 1, start: "top bottom", end: "-25%" }}
};

export const projCardAnimation = {
    from: { x: "80%", opacity: 0 },
    to: { x: 0, opacity: 1, scrollTrigger: { trigger: "#section-2", scrub: 1, start: "top bottom", end: "-25%", } }
};

export const resumeBtnAnimation = {
    enter: {text: {value: "view resume"}, ease: "expo.out"},
    leave: {text: {value: "resume"}, ease: "bounce.inOut"}
}

export const emailBtnAnimation = {
    enter: {text: {value: "copy email"}, ease: "expo.out"},
    leave:  {text: {value: "email"}, ease: "bounce.inOut"}
}

export const techstacksAnimation = {
    from: { opacity: 0, y: 20}, 
    to: {opacity: 1, y: 0, stagger: {each: .05, from: 'random'}, 
        scrollTrigger: {trigger: '#section-2', toggleActions: 'play none reset none', start: "top 50%", end: "50% bottom"}
    }
}

export const languageAnimation = {
    from: { opacity: 0}, 
    to: {opacity: 1, stagger: {each: .08, from: 'center'}, ease: 'power2.inOut', 
        scrollTrigger: {trigger: '#section-2', toggleActions: 'play none reset none', start: "top 50%", end: "50% bottom"}
    }
}

export const ProjectAnimation = {
    from: { opacity: 0, y: 20}, 
    to: {opacity: 1, y: 0, stagger: {each: .3, from: 'start'}, ease: 'power2.inOut', 
        scrollTrigger: {scrub: true, trigger: '#section-3', toggleActions: 'play none none none', start: "top bottom", end: "bottom bottom"}
    }
} 