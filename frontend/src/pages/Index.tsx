import { useState } from "react";
import { Globe, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const API_BASE_URL = "http://127.0.0.1:8000";

const Index = () => {
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !prompt.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), prompt: prompt.trim() }),
      });

      if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);

      const data = await res.json();
      setResponse(typeof data === "string" ? data : JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || "Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl space-y-8">
          {!response && !loading && !error && (
            <div className="text-center space-y-3 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Analise qualquer <span className="text-gradient">website</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Insira uma URL e faça perguntas sobre o conteúdo. A IA analisa a página e responde.
              </p>
            </div>
          )}

          {/* Response Area */}
          {(response || loading || error) && (
            <div className="animate-slide-up">
              <div className="rounded-xl border border-border bg-card p-6 glow-primary">
                {loading && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    <span>Analisando o site...</span>
                  </div>
                )}
                {error && (
                  <p className="text-destructive">{error}</p>
                )}
                {response && (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {response}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
            <div className="rounded-xl border border-border bg-card p-4 space-y-3 glow-primary transition-all focus-within:border-primary/50">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                <Input
                  type="text"
                  placeholder="Digite a URL (ex: g1.globo.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="border-0 bg-transparent p-0 h-auto text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="border-t border-border" />
              <div className="flex items-start gap-3">
                <Textarea
                  placeholder="O que você quer saber sobre este site?"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={2}
                  className="border-0 bg-transparent p-0 min-h-0 resize-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={loading || !url.trim() || !prompt.trim()}
                  className="gradient-primary text-primary-foreground rounded-lg shrink-0 hover:opacity-90 disabled:opacity-40 transition-opacity"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </form>

          {!response && !loading && (
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
              {[
                { url: "g1.globo.com", prompt: "Quais as principais notícias de hoje?" },
                { url: "ge.globo.com", prompt: "Quais os resultados dos jogos mais recentes?" },
                { url: "youtube.com", prompt: "Quais os vídeos em alta?" },
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => { setUrl(suggestion.url); setPrompt(suggestion.prompt); }}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  {suggestion.url}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Powered by <span className="text-gradient font-medium">LangChain</span> & <span className="text-gradient font-medium">Groq</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
