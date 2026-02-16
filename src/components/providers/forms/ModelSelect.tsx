import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCw, Database, Cloud } from "lucide-react";
import { useProviderModels } from "./hooks";
import { cn } from "@/lib/utils";

export function ModelSelect() {
    const { control, watch, setValue } = useFormContext();
    const { t } = useTranslation();

    const providerId = watch("id");
    const baseUrl = watch("baseUrl");
    const apiKey = watch("apiKey");
    // Some providers might not have these fields, so we handle gracefully
    const isEnabled = !!baseUrl;

    const { models, isLoading, isCached, refetch, error } = useProviderModels(
        providerId,
        baseUrl,
        apiKey,
        isEnabled
    );

    return (
        <div className="space-y-4">
            <div className="flex items-end gap-2">
                <FormField
                    control={control}
                    name="model"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel className="flex items-center gap-2">
                                {t("provider.model", "Model")}
                                {isCached ? (
                                    <Database className="h-3 w-3 text-muted-foreground" title="Cached" />
                                ) : (
                                    <Cloud className="h-3 w-3 text-muted-foreground" title="Live" />
                                )}
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t("provider.modelPlaceholder", "Select a model")} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {models.map((model) => (
                                        <SelectItem key={model.id} value={model.id}>
                                            <span className="flex items-center gap-2">
                                                {model.name}
                                                {/* We could add more info here later for Lazy Cards */}
                                            </span>
                                        </SelectItem>
                                    ))}
                                    {models.length === 0 && !isLoading && (
                                        <div className="p-2 text-sm text-muted-foreground text-center">
                                            {error ? "Failed to load" : "No models found"}
                                        </div>
                                    )}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => refetch()}
                    disabled={isLoading || !isEnabled}
                    title="Refresh Models"
                >
                    <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
                </Button>
            </div>
            {error && <p className="text-xs text-destructive">{error.message}</p>}
        </div>
    );
}
