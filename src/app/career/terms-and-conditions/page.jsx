import Container from "@/app/components/container";
import GridBG from "@/app/components/gridbg";

export default function TermsAndConditions(){
    return(
        <main className="relative">
            <GridBG />
            <Container>
            <div className="max-w-screen-lg mx-auto flex flex-col gap-20 items-center pt-32 pb-24">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-base md:text-lg text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Employee Agreement for New Recruits
                    </p>
                    <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                        Terms and Conditions
                    </h2>
                </div>

                <div className="space-y-10">
                    {/* Section 1: Introduction */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">1. Introduction</h2>
                        <p className="text-white leading-relaxed font-poppins">
                            Welcome to our organization. By accepting employment with our company, you agree to comply with these Terms and Conditions. 
                            This agreement governs your relationship with the company and outlines your rights, responsibilities, and obligations as an employee. 
                            Please read these terms carefully as they form a binding contract between you and the company.
                        </p>
                    </section>

                    {/* Section 2: Confidentiality */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">2. Confidentiality and Non-Disclosure</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                You acknowledge that during your employment, you may have access to confidential and proprietary information, including but not limited to:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Trade secrets, algorithms, and technical specifications</li>
                                <li>Client lists, customer data, and business relationships</li>
                                <li>Financial information, pricing strategies, and business plans</li>
                                <li>Internal processes, methodologies, and strategic initiatives</li>
                                <li>Software code, designs, and intellectual property</li>
                            </ul>
                            <p className="text-white leading-relaxed font-poppins">
                                You agree to maintain strict confidentiality of all such information during and after your employment, 
                                and shall not disclose, use, or exploit such information for personal gain or the benefit of third parties.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Code of Conduct */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">3. Code of Conduct</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">All employees are expected to:</p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Act with integrity, honesty, and professionalism at all times</li>
                                <li>Respect colleagues, clients, and stakeholders regardless of background</li>
                                <li>Maintain a harassment-free and inclusive work environment</li>
                                <li>Comply with all applicable laws, regulations, and company policies</li>
                                <li>Report any unethical behavior or policy violations promptly</li>
                                <li>Avoid conflicts of interest that may compromise professional judgment</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4: Intellectual Property */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">4. Intellectual Property Rights</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                All work products, inventions, discoveries, and creative works developed during your employment 
                                or using company resources shall be the exclusive property of the company. This includes:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Software code, applications, and technical solutions</li>
                                <li>Documentation, reports, and written materials</li>
                                <li>Processes, methodologies, and business innovations</li>
                                <li>Any improvements to existing company products or services</li>
                            </ul>
                            <p className="text-white leading-relaxed font-poppins">
                                You agree to assign all rights, title, and interest in such work to the company and 
                                assist in securing any necessary patents, copyrights, or other intellectual property protections.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: Technology and Security */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">5. Technology Use and Information Security</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">You agree to:</p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Use company technology resources responsibly and for business purposes</li>
                                <li>Maintain strong passwords and follow cybersecurity best practices</li>
                                <li>Report security incidents or data breaches immediately</li>
                                <li>Not install unauthorized software or access restricted systems</li>
                                <li>Comply with data protection and privacy regulations (GDPR, CCPA, etc.)</li>
                                <li>Return all company devices and data upon termination of employment</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6: Performance and Expectations */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">6. Performance Standards and Expectations</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                You are expected to perform your duties with competence, diligence, and in accordance with 
                                company standards. This includes:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Meeting project deadlines and quality standards</li>
                                <li>Participating constructively in team activities and meetings</li>
                                <li>Continuously developing professional skills and knowledge</li>
                                <li>Following established procedures and workflows</li>
                                <li>Communicating effectively with team members and stakeholders</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7: Termination */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">7. Termination</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                Employment may be terminated by either party with appropriate notice as specified in your employment contract. 
                                The company reserves the right to terminate employment immediately for cause, including but not limited to:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-white font-poppins">
                                <li>Breach of confidentiality or non-disclosure agreements</li>
                                <li>Violation of company policies or code of conduct</li>
                                <li>Poor performance or failure to meet job requirements</li>
                                <li>Engagement in illegal or unethical activities</li>
                            </ul>
                            <p className="text-white leading-relaxed font-poppins">
                                Upon termination, all confidentiality and intellectual property obligations continue indefinitely.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: Compliance */}
                    <section className=" rounded-lg p-8 ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400 font-poppins">8. Legal Compliance and Dispute Resolution</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                These terms are governed by applicable employment laws and regulations. Any disputes arising from 
                                this agreement shall be resolved through appropriate legal channels. You acknowledge that you have 
                                read, understood, and agree to comply with all terms outlined in this document.
                            </p>
                            <p className="text-white leading-relaxed font-poppins">
                                The company reserves the right to modify these terms with reasonable notice to employees.
                            </p>
                        </div>
                    </section>

                    {/* Acknowledgment Section */}
                    <section className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 border border-blue-600">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300 font-poppins">Employee Acknowledgment</h2>
                        <div className="space-y-4">
                            <p className="text-white leading-relaxed font-poppins">
                                By proceeding with your employment, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                                You confirm that you have had the opportunity to ask questions and seek clarification where needed.
                            </p>
                            <div className="mt-6 p-4 bg-blue-800 bg-opacity-30 rounded-lg border border-blue-600">
                                <p className="text-blue-200 font-medium font-poppins">
                                    For questions regarding these terms, please contact the Human Resources department.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            </Container>
        </main>
    )
}
