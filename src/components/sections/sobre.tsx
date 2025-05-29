import { Link } from "react-router-dom";

function Sobre() {
	return (
		<>
			{/* Transição bonita entre seções */}
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent h-32"></div>
				<svg className="relative w-full h-16 text-primary" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
					<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
				</svg>
			</div>

			{/* Seção Sobre */}
			<section id="about" className="bg-primary py-20 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="flex items-center justify-center gap-2 mb-4">
							<div className="w-5 h-5 rounded-full bg-tech-blue"></div>
							<span className="text-secondary text-lg">Conheça minha trajetória</span>
						</div>
						<h2 className="text-white font-black text-4xl lg:text-5xl mb-6">
							Sobre <span className="text-tech-blue">Mim</span>
						</h2>
					</div>

					{/* Content Grid */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Text Content */}
						<div className="space-y-6">
							<div className="space-y-4 text-secondary leading-relaxed">
								<p className="text-lg">
									Sou <span className="text-white font-semibold">Desenvolvedor de Sistemas e Especialista em Automação Industrial</span>, 
									brasileiro vivendo em Portugal há 2 anos. Possuo sólida formação técnica com 
									<span className="text-white font-semibold"> Licenciatura em Análise e Desenvolvimento de Sistemas</span> e 
									<span className="text-white font-semibold"> Pós-graduação em Ciência de Dados</span>.
								</p>
								
								<p>
									Minha expertise inclui <span className="text-white font-semibold">Redes de Computadores e Cibersegurança</span>, 
									desenvolvendo projetos que integram <span className="text-white font-semibold">automação industrial com tecnologias modernas</span> 
									como Python, Go, JavaScript, interfaces SCADA e bases de dados.
								</p>
								
								<p>
									Com mais de <span className="text-white font-semibold">10 anos na AB InBev</span> como Técnico de Automação, 
									expandiu para Portugal e Espanha trabalhando nas multinacionais 
									<span className="text-white font-semibold"> Grupo Damm</span> e <span className="text-white font-semibold">Heineken</span>, 
									consolidando expertise híbrida entre automação e desenvolvimento.
								</p>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-6 pt-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-tech-blue mb-2">10+</div>
									<div className="text-sm text-secondary">Anos de<br/>Experiência</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-tech-blue mb-2">3</div>
									<div className="text-sm text-secondary">Países de<br/>Atuação</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-tech-blue mb-2">∞</div>
									<div className="text-sm text-secondary">Soluções<br/>Criadas</div>
								</div>
							</div>

							{/* CTA */}
							<div className="pt-6">
								<Link
									to="/contato"
									className="inline-flex items-center gap-3 py-3 px-8 bg-tech-blue hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
									Vamos Conversar
								</Link>
							</div>
						</div>

						{/* Image */}
						<div className="flex justify-center lg:justify-end">
							<div className="relative">
								{/* Decorative elements */}
								<div className="absolute -inset-4 bg-gradient-to-r from-tech-blue/20 to-purple-600/20 rounded-2xl blur-xl"></div>
								<div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/10 to-transparent rounded-2xl"></div>
								
								{/* Main image */}
								<div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
									<img 
										src="/portfolio-danilo/images/eu.svg"
										alt="Danilo Lira" 
										className="w-80 h-80 object-contain rounded-xl"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Sobre;