"use client"; // Indica que o componente será renderizado no lado do cliente

import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa"; // Ícone de check
import styles from './ticket.module.scss';

export function TicketItem() {
    const items: string[] = [
        "Mapeamento das operações de tratamento",
        "Mapeamento de repositórios físicos",
        "Mapeamento de fornecedores",
        "Mapeamento de sistemas",
        "Mapeamento de infraestrutura de TI",
        "Mapeamento de contratos",
        "Dicionário de Dados Pessoais com centenas de itens",
        "Visão de múltiplas organizações (ideal para DPO as a Service ou DPO para grupos empresariais)",
        "Estrutura organizacional com visão por organograma",
        "Estrutura organizacional com visão por processo de negócio",
        "Registro das estratégias de Continuidade de Negócio por Sistema",
        "Gestão de Continuidade | R.T.O. & R.P.O.",
        "Dashboard básico",
        "Medidas técnicas e organizacionais",
        "Template de Assessment 27.001",
        "Template de Assessment 27.701",
        "Template de Assessment CIS Controls",
        "Template de Assessment LGPD",
        "Customização de questionários para avaliações",
        "Workflow com segregação de função para assessment (respondedor / aprovador)",
        "Avaliação de risco por operação de tratamento",
        "Gestão de tratamento dos riscos",
        "Gestão do plano de ação",
        "Gestão de prazos das ações",
        "Planejamento de orçamento da Implementação da ação",
        "Gestão de Programas de Compliance",
        "Logs por usuário",
        "Tracking das ações para múltiplos Programas de Conformidade",
        "Registro do DPO interno e de Fornecedores",
        "Suporte por e-mail",
        "Suporte por telefone",
        "Relatórios Avançados",
        "Dashboard com customizações básicas",
        "Relatórios customizáveis",
        "Dashboard customizáveis",
        "Security – Restrição de Acesso por IP",
        "Security – Restrição de Acesso com base no tempo",
        "Security – Alertas de segurança por comportamento suspeito do usuário",
        "AD Integration",
        "Integrações com outros sistemas (API)",
    ];

    const initialItemsLimit = 7;
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const shouldDisplayIconForEssentials = (item: string): boolean => {
        const noIconForEssentials = [
            "Suporte por telefone",
            "Relatórios Avançados",
            "Dashboard com customizações básicas",
            "Relatórios customizáveis",
            "Dashboard customizáveis",
            "Security – Restrição de Acesso por IP",
            "Security – Restrição de Acesso com base no tempo",
            "Security – Alertas de segurança por comportamento suspeito do usuário",
            "AD Integration",
            "Integrações com outros sistemas (API)",
        ];
        return !noIconForEssentials.includes(item);
    };

    const shouldDisplayIconForAdvanced = (item: string): boolean => {
        const noIconForAdvanced = [
            "Relatórios customizáveis",
            "Dashboard customizáveis",
            "Security – Restrição de Acesso por IP",
            "Security – Restrição de Acesso com base no tempo",
            "Security – Alertas de segurança por comportamento suspeito do usuário",
            "AD Integration",
            "Integrações com outros sistemas (API)",
        ];
        return !noIconForAdvanced.includes(item);
    };

    return (
        <div className={styles.planos}>
            <div className={styles.planos2}>
                <h2>Nossos Planos</h2>
                <p>
                    <span>Confira os principais recursos do SimpleWay e escolha o que mais atende as necessidades<br />
                    da sua empresa.
                    </span>
                </p>
            </div>
            <div className={styles.style}>
                <div className={styles.tabeladiv}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>
                                    <h3>Compare os planos</h3>
                                    <div className={styles.spanText}>
                                        <span>Escolha o melhor plano para as necessidades da sua empresa.</span>
                                    </div>
                                </th>
                                <th className={styles.th}><h2>Essentials</h2></th>
                                <th className={styles.th}><h2>Advanced</h2></th>
                                <th className={styles.th}><h2>Enterprise</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.slice(0, initialItemsLimit).map((item) => (
                                <tr key={item} className={styles.tr}>
                                    <td className={styles.td}><span>{item}</span></td>
                                    <td className={styles.td}>
                                        {shouldDisplayIconForEssentials(item) && (
                                            <FaCheckCircle color="#0074bc" size={12} />
                                        )}
                                    </td>
                                    <td className={styles.td}>
                                        {shouldDisplayIconForAdvanced(item) && (
                                            <FaCheckCircle color="#0074bc" size={12} />
                                        )}
                                    </td>
                                    <td className={styles.td}>
                                        <FaCheckCircle color="#0074bc" size={12} />
                                    </td>
                                </tr>
                            ))}

                            {showMore && items.slice(initialItemsLimit).map((item) => (
                                <tr key={item} className={styles.tr}>
                                    <td className={styles.td}><span>{item}</span></td>
                                    <td className={styles.td}>
                                        {shouldDisplayIconForEssentials(item) && (
                                            <FaCheckCircle color="#0074bc" size={12} />
                                        )}
                                    </td>
                                    <td className={styles.td}>
                                        {shouldDisplayIconForAdvanced(item) && (
                                            <FaCheckCircle color="#0074bc" size={12} />
                                        )}
                                    </td>
                                    <td className={styles.td}>
                                        <FaCheckCircle color="#0074bc" size={12} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {!showMore && (
                        <div className={styles.saibaMaisContainer}>
                            <button onClick={toggleShowMore} className={styles.saibaMaisButton}>
                                Veja mais sobre os planos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
