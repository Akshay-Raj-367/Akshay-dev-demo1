import React from 'react'

export default function Pages() {
  return (
    <div><div class="card">
    <img  height ={1000} width src= "images/superman.jpeg"  alt="this is super man image"/>
  
    <div class="card-body">
      <h5 class="card-title">SuperMan</h5>
      <p class="card-text">Superman is one of the most iconic fictional superheroes, created by writer Jerry Siegel and artist Joe Shuster. He first appeared in Action Comics #1 in 1938, published by DC Comics. Here’s a quick overview:

Origin:
Real Name: Kal-El
Home Planet: Krypton
Earth Name: Clark Kent (adopted by Jonathan and Martha Kent in Smallville, Kansas)
Backstory: Sent to Earth as an infant by his parents, Jor-El and Lara, moments before Krypton’s destruction. On Earth, he gains extraordinary powers under the yellow sun.
Powers:
Super strength, speed, and durability
Flight
Heat vision, X-ray vision, and super breath
Near-invulnerability
Enhanced senses
Weaknesses:
Kryptonite: A radioactive mineral from Krypton that weakens and can kill him.
Magic: He is vulnerable to magical attacks.
Allies and Enemies:
Allies: Lois Lane, Jimmy Olsen, Batman, Wonder Woman, and the Justice League.
Enemies: Lex Luthor, General Zod, Brainiac, Doomsday, Darkseid, and many others.
Symbolism:
Superman represents hope, justice, and the best of humanity. His “S” shield is one of the most recognizable symbols in pop culture.

Let me know if you want more details about any specific aspect!</p>
      <a target='_blank' href="https://search.brave.com/images?q=golden%20retriever" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  
  <div class="card" aria-hidden="true">
    <img  height= {400} width={500} src="images/gr.jpeg"  alt="random img "/>
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
  </div></div>
  )
}
